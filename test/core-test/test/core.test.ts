import { test } from 'vitest'
import helloWorld from '../../../packages/core/src'

test('hello world',()=>{
  console.log(helloWorld())
})
