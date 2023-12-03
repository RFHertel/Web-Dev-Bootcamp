// WRITE YOUR CODE IN HERE:

//collect lis
const liCollection = document.querySelectorAll('li')

//iterate over collection
for (let li of liCollection) {
  if (li.classList.contains('highlight')) {
    li.classList.remove('highlight');
  } else {
    li.classList.add('highlight');
  }
}
