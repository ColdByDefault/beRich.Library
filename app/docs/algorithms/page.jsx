'use client';
import KatexSpan  from '@components/LaTexRender';
import '@styles/docs.css';

export default function AlgorithmsPage() {

    return (
        <section className='docs-section relative'>
            <div>
                <h1>Algorithms</h1>
                <h2>Definition</h2>
                <p>Is a set of Steps or Instructions for a program to solve a problem or perform a task.
                </p><h3>To Choose an Algorithm is about Context:</h3>
                <ul><li> Correctness: a given input must result in the same output every time</li><li>Efficiency: 
                <em>Less Time & Less Space</em>
                <ul>
                        <li>
                        Time Complexity: How long it takes the Algorithm to solve a problem/perform a task
                        </li>
                        <li>
                        Space Complexity: The amount of memory that is needed
                        </li>
                    </ul>
                    </li>
                </ul>
                <div>
                    <div>
                        <h2>Scenario: Guess the Number</h2>
                        <ul>
                            <li>Guess the Number between 1 and 10 ⇒ Number = 4 ⇒ 4 Steps</li>
                            <li>Guess the Number between 1 and 10 ⇒ Number = 10 ⇒ 10 Steps</li>
                            <li>Guess the Number between 1 and 100 ⇒ Number = 100 ⇒ 100 Steps</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Worst Case Scenario:</h3>
                        <ul>
                            <li>When n = 10 ⇒ it takes 10 Steps</li>
                            <li>When n = 100 ⇒ it takes 100 Steps</li>
                            <li>Guess the Number between 1 and 100 ⇒ Number = 100 ⇒ 100 Steps</li>
                        </ul>
                    </div>
                </div>
                <h2>Binary Search</h2>
                <p>
                    An efficient algorithm to find a target number in a sorted list by repeatedly dividing the search range in half.
                </p>
                <p>
                    In a list of 101 numbers from 0 to 100, the algorithm starts at the middle (index 50) and checks if the target is
                    less than, greater than, or equal to 50, then narrows down the search to the left or right half accordingly,
                    continuing until the target is found or the range is exhausted.
                </p>
            <div className='flexy'>
                <p>Starts at</p>
                <pre><code >{`len(list) // 2`}</code></pre>
            </div>
            <p>Need Sorted Lists</p>
            </div>
            <hr />
            <div>
            <h1>The Big O</h1>
            <div>
                <KatexSpan text={'$2 * 2 * 2 = 8$ $\\Rightarrow$ $2^3 = 8$ $\\Rightarrow$ $\\log_2 8 = 3$'} />
            </div>
            <div className='flexy'>
            <p>Theoretical definition of the complexity of an Algorithm as a function of the size.{' '}</p>
            <KatexSpan text={'$O(n)$'}  /> ⇒ Order of magnitude of complexity
            </div>

            <h3>Time Of Complexity:</h3>
            <ul>
                <li className='flexy'>For Linear Search ⇒ <KatexSpan text={'$O(n)$'}  /></li>
                <li className='flexy'>Constant Time Operation ⇒ <KatexSpan text={'$O(1)$'}  /></li>
                <li className='flexy'><KatexSpan text={'$O(n^2)$'}  /> This is called Quadratic Runtime</li>
                <li className='flexy'><KatexSpan text={'$O(n^3)$'}  /> ⇒ Cubic Runtime</li>
                <li className='flexy'>
                Logarithmic Time Complexity: Quasilinear Runtimes: <KatexSpan text={'$O(log n)$'}  />
                </li>
                <li className='flexy'>Expected to see in:</li>
                <ul>
                <li>Sorting Algorithms</li>
                <li>Merge Sorting</li>
                </ul>
                <li className='flexy'>Logarithmic Linear Time Complexity <KatexSpan text={'$O(n log n)$'}  /></li>
                <li className='flexy'>Sublinear Time Complexity: <KatexSpan text={'$O(\\sqrt{n}), O(log log n)$'}  /></li>
                <li className='flexy'>Polylogarithmic Time Complexity: <KatexSpan text={'$O((log n)^k)$'}  /></li>
                <li className='flexy'>Linearithmic Runtime: <KatexSpan text={'$O(n log^2 n)$'}  /></li>
            </ul>

            <h3>Travelling Salesman:</h3>
            <p>
                (TSP) is a classic optimization problem in which a salesman is required to visit a set of cities, each exactly once,
                and return to the starting city, while minimizing the total distance or cost of the journey. The challenge lies in
                finding the most efficient route that covers all cities without visiting any city more than once.
            </p>

            <h3>Factorial / Combinatorial:</h3>
            <div>
                <KatexSpan text={'$n! = n(n - 1)(n - 2)\\ldots(2)(1)$'}  />
            </div>
            <div>
                so if we had 4 Cities ⇒ <KatexSpan text={'$n = 4$'}  /> ⇒ <KatexSpan text={'$4! = 4 * 3 * 2 * 1 = 24$'}  />
            </div>
            <p>
                BUT if we had 10 Cities there are over 3M possible routes! TOO SLOW
            </p>

            <div>
                (TSP) has a time complexity of <KatexSpan text={'$O(n!)$'}  /> in its brute-force approach.
            </div>

            <h3 className="text-lg font-semibold text-gray-400">Factorial and Exponential:</h3>
            <p>
                Dynamic Programming
            </p>
            <div>
                Bellman-Held-Karp Algorithm <KatexSpan text={'$O(n^2 * 2^n)$'}  />
            </div>
            <div>
                Approximation Algorithm ⇒ Nearest Neighbor Algorithm <KatexSpan text={'$O(n^2)$'}  />
            </div>
            <div>
                Christofides Algorithm ⇒ <KatexSpan text={'$O(n^3)$'}  />
            </div>
            </div>
        </section>
    );
}
  