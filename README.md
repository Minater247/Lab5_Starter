# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

## Logistics
**Lab Writer**: Nathan Reed

Due to time constraints and general difficulty scheduling, I found it best to work solo on this project. I do not want to freeload on anyone else's work, as I was not able to find any viable time to meet up as a pair/group.

## CYU Answers
1. I would say no. There are too many subsections to be an encapsulated unit - message content escaping, content verification, network handling, destination identification, e2e encryption (if present). There could be tests for it, but they should be composed of smaller tests, and this wouldn't be q unit test.
2. Yes, this is a small enough feature. It is in an enclosed box with a reasonably small set of conditions to check - verify no strings of length greater than the length are allowed (and no type oddities break that, if JS).
