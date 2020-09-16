var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]

var arr2 = arr.map(function(currElement, index, arrayInitial) {
         var nvxObj = {
             firstName: 'Daniel',
             surName: currElement.surname,
             fullname: currElement.firstName + ' ' + currElement.surname
         }
         return nvxObj
     })
     console.log(arr2)