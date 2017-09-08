const QueryRecognition = require('../src/query_recognition')

describe('QueryRecognition', function () {
  var queryCommited = ''
  var queryRecognition = QueryRecognition(query => queryCommited = query)
  it ('returns a object', function () {
    expect(queryRecognition).toBeInstanceOf(Object)
  })

  it ('should not commit on update', function () {
    queryRecognition.update('ho')
    expect(queryCommited).toBe('')
    queryRecognition.update('how do')
    expect(queryCommited).toBe('')
    queryRecognition.update('how do i canc')
    expect(queryCommited).toBe('')
    queryRecognition.update('how do i cancel my acc')
    expect(queryCommited).toBe('')
  })

  it ('should commit on backspace', function () {
    queryRecognition.update('how do i cancel my ac')
    expect(queryCommited).toBe('how do i cancel my acc')
  })

  it ('should not commit on sequencial backspace', function () {
    queryRecognition.update('how do i cancel my ')
    expect(queryCommited).toBe('how do i cancel my acc')
  })

  it ('should not commit on typing again', function () {
    queryRecognition.update('how do i cancel my subscription')
    expect(queryCommited).toBe('how do i cancel my acc')
  })

  it ('should not commit on typing same string', function () {
    queryRecognition.update('how do i cancel my subscription')
    expect(queryCommited).toBe('how do i cancel my acc')
  })

  it ('should reset when query is empty and commit', function () {
    queryRecognition.update('')
    expect(queryCommited).toBe('how do i cancel my subscription')
    expect(queryRecognition.saved).toBe(false)
    expect(queryRecognition.longestQuery).toBe('')
  })
})
