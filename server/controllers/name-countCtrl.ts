/* eslint-disable no-var */
import { Request, Response } from "express";
import * as fs from 'fs';
const olivertwist = "./resources/oliver-twist.txt";
const firstNames = "./resources/first-names.txt";

export default class NameCount {
  constructor() {}

  getNameCount(req: Request, res: Response) {
    fs.readFile(olivertwist, "utf8", function (err: any, bookData: any) {
      if (err) throw err;

      // reads first-names.txt
      fs.readFile(firstNames, "utf8", function (err: any, firstNamedata: any) {
        if (err) throw err;

        // uses data from txt to split into spaces
        var firstNameWordArray = NameCount.prototype.splitByWords(firstNamedata);
        var bookArray = NameCount.prototype.splitByWords(bookData);

        // creates new array of firstwords from book
        let foundNamesArray = bookArray.filter((el: any) =>
          firstNameWordArray.includes(el)
        );
 
        // make a new object
        var count = {};

        // counts duplicate values in array
        foundNamesArray.forEach(function (i: string | number) {
          count[i] = (count[i] || 0) + 1;
        });

        var sortedNamesArray = NameCount.prototype.sortByCount(count);
        
        //stores parameter in a variable
        const query = req.params.name;

        // check if JSON object contains the query value
        const result = sortedNamesArray.filter((value: { name: string; }) => value.name === query);

        // error validation if the query is empty
        if (result === undefined || result.length == 0) {
          res.send(`Your query of ${query} does not exist in the list`);
        } else {
          res.send(result);
        }
      });
    });
  }

  /**
   * Takes the text file and split it by spaces
   *
   * @param {string} text - A string param
   * @return {text} An array
   *
   */
  splitByWords(text: string) {
    // var wordsArray = 
    return text.split(/\s+/);
  }

  /**
   * sort by count in descending order
   *
   * @param {string} wordsMap - A string param
   * @return {Array} An array of objects
   *
   */
  sortByCount(wordsMap: { [x: string]: any; }): Array<any> {
    let wordsArray = <any[]>([]);
    
    wordsArray = Object.keys(wordsMap).map(function (key: string | number) {
      return {
        name: key,
        total: wordsMap[key],
      };
    });

    wordsArray.sort(function (a, b) {
      return b['total'] - a['total'];
    });

    return wordsArray;
  }
}



