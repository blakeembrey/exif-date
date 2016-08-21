import test = require('blue-tape')
import { format, parse } from './index'

test('exif-date', t => {
  t.test('parse', t => {
    t.equal(parse('2016:07:11 21:33:20').toISOString(), '2016-07-11T21:33:20.000Z')
    t.equal(parse('2016:07:11 21:33:20.71').toISOString(), '2016-07-11T21:33:20.710Z')
    t.equal(parse('2015:03:19 19:03:50Z').toISOString(), '2015-03-19T19:03:50.000Z')
    t.equal(parse('not a date'), undefined)
    t.end()
  })

  t.test('format', t => {
    t.equal(format(new Date('2016-07-11T21:33:20.000Z')), '2016:07:11 21:33:20')
    t.equal(format(new Date('2016-07-11T21:33:20.155Z'), true), '2016:07:11 21:33:20.16')
    t.equal(format(new Date('not a date')), undefined)
    t.end()
  })
})
