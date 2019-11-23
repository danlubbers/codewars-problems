// https://www.codewars.com/kata/extract-file-name/train/javascript

// You have to extract a portion of the file name as follows:

// Assume it will start with date represented as long number
// Followed by an underscore
// Youll have then a filename with an extension
// it will always have an extra extension at the end
// Inputs:
// 1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION

// 1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34

// 1231231223123131_myFile.tar.gz2
// Outputs
// FILE_NAME.EXTENSION

// This_is_an_otherExample.mpg

// myFile.tar
// Acceptable characters for random tests:

// abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-0123456789

// The recommend way to solve it is using RegEx and specifically groups.

// My Answer
class FileNameExtractor {
  static extractFileName (dirtyFileName) {
    let regex = /(\d+_)([^.]+.[^.]+)(.+)/;
    return dirtyFileName.replace(regex, `$2`)
  }
}

// Best Practice
class FileNameExtractor {
  static extractFileName = dirty => dirty.match(/^\d+_([^.]+\.[^.]+)/)[1];
}

// Without Using Regex
class FileNameExtractor {
  static extractFileName(dirtyFileName) {
    let numSlice = dirtyFileName.indexOf('_');
    let extSlice = dirtyFileName.lastIndexOf('.')
    return dirtyFileName.slice(numSlice + 1, extSlice);

  }
}

console.log(FileNameExtractor.extractFileName("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34"),"FILE_NAME.EXTENSION");
console.log(FileNameExtractor.extractFileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION"),"FILE_NAME.EXTENSION");