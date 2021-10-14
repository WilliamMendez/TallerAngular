/* tslint:disable:no-unused-variable */

import { TestBed, async, inject, getTestBed } from "@angular/core/testing";
import { BookService } from "./book.service";

import {
 HttpTestingController,
 HttpClientTestingModule,
} from "@angular/common/http/testing";

import * as faker from "faker";
import { Book } from "./book";
import { environment } from "../../environments/environment";
import { Editorial } from "../editorial/editorial";

describe("Service: Book", () => {
 let injector: TestBed;
 let service: BookService;
 let httpMock: HttpTestingController;
 let apiUrl = environment.baseUrl + "books";

 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [BookService],
   });
   injector = getTestBed();
   service = injector.get(BookService);
   httpMock = injector.get(HttpTestingController);
 });

 afterEach(() => {
   httpMock.verify();
 });

 it("getPost() should return 10 records", () => {
   let mockPosts: Book[] = [];
   let non: Editorial = new Editorial(faker.datatype.number(), faker.lorem.sentence());

   for (let i = 1; i < 11; i++) {
     let book = new Book(
       i,
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.lorem.sentence(),
       faker.image.imageUrl(),
       faker.date.past(),
       non
     );

     mockPosts.push(book);
   }

   service.getBooks().subscribe((books) => {
     expect(books.length).toBe(10);
   });

   const req = httpMock.expectOne(apiUrl);
   expect(req.request.method).toBe("GET");
   req.flush(mockPosts);
 });
});
