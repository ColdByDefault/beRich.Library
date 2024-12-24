export default function AlgorithmsPage() {
    return (
        <section>
            <div>
            <h1>Algorithms</h1>
            <h2>Definition</h2>
            <p>Is a set of Steps or Instructions for a program to solve a problem or perform a task.</p>
            <p>To Choose an Algorithm is about Context:</p>
            <ol>
                <li>Correctness: a given input must result in the same output every time</li>
                <li>Efficiency: <em>Less Time & Less Space</em>
                <ol>
                    <li>Time Complexity ⇒ How long it takes the Algorithm to solve a problem/perform a task</li>
                    <li>Space Complexity ⇒ The amount of memory that is needed</li>
                </ol>
                </li>
            </ol>

            <h2>Scenario Guess the Number</h2>
            <p>Guess the Number between 1 and 10 ⇒ Number = 4</p>
            <p>⇒ 4 Steps</p>
            <p>Guess the Number between 1 and 10 ⇒ Number = 10</p>
            <p>⇒ 10 Steps</p>
            <p>Guess the Number between 1 and 100 ⇒ Number = 100</p>
            <p>⇒ 100 Steps</p>
            <p><strong>Worst Case Scenario:</strong></p>
            <p>When n = 10 ⇒ it takes 10 Steps</p>
            <p>When n = 100 ⇒ it takes 100 Steps</p>

            <h2>Binary Search</h2>
            <p>An efficient algorithm to find a target number in a sorted list by repeatedly dividing the search range in half.</p>
            <p>In a list of 101 numbers from 0 to 100, the algorithm starts at the middle (index 50) and checks if the target is less than, greater than, or equal to 50, then narrows down the search to the left or right half accordingly, continuing until the target is found or the range is exhausted.</p>
            <p>Starts at (<code>len(list) // 2</code>)</p>
            <p>Needs Sorted Lists</p>
            </div>

        </section>
    );
}
  