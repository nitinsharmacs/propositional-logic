# Propositional Logic Implementation

This project is to explore propositional logic and implementing it.

## Queries

A query is a ask operation to which system answers in yes or no. System uses rules of inferences as defined in propositional logic, draws the inferences and verifies if the query is satisfied by the knowledgebase.

A query can be of the following form.

```
Rain?
not Rain?
```

## Rules of Inferences

As of now, this implementation consists of following rules of inferences.

### 1. Modus Ponens

```
A -> B, A
---------------
B
```

### 2. Modus Tollens

```
A -> B, ~B
---------------
~A
```

### 3. Conjunction

```
A, B
----------------
A ∧ B
```

## How to use?

To use it, you simply need to run following command.

```
node pl.js
```

## References

1. [Rules of inferences](https://sites.millersville.edu/bikenaga/math-proof/rules-of-inference/rules-of-inference.html)
2. https://www.cs.cornell.edu/courses/cs472/2005fa/lectures/15-kb-systems_part2_6up.pdf
3. [Introduction to classical propositional logic](https://www3.cs.stonybrook.edu/~cse541/chapter2.pdf)
4. [Logic 1 - Propositional Logic](https://www.youtube.com/watch?v=xL0kNw5TudI&ab_channel=StanfordOnline)
