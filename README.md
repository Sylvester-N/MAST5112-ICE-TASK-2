MAST5112
Bianca Khumalo - ST10474479
Silvester Nyangulu - ST10470942
Leander Hughes - ST10471529
Sami El Naamani - ST10470683

GitHub: 


Mystery Number Challenge

Mystery Number Challenge is a mobile guessing game built with React Native and TypeScript. The goal is simple: guess the randomly generated number between 1 and 100. With each attempt, the app gives feedback—whether your guess is too high, too low, or spot on—and tracks how many tries it takes to get it right.

This project was created as part of our ICE Task 2 for the module MAST5112.

How the app works

When the app loads, it generates a random number between 1 and 100.
The user enters a guess using the number pad.
The app compares the guess to the target number and displays feedback:
   - “Too low!” if the guess is below the target.
   - “Too high!” if the guess is above the target.
   - “Correct!” if the guess matches the target.
Each guess increments the attempt counter.
A restart button resets the game with a new number and clears previous guesses.

<img width="1920" height="1080" alt="Screenshot 2025-08-05 192731" src="https://github.com/user-attachments/assets/dc097005-8f6f-4988-a558-c1119f5d5f48" />
<img width="1920" height="1080" alt="Screenshot 2025-08-05 193226" src="https://github.com/user-attachments/assets/515025dd-b24c-49c9-bf5f-c427431e2145" />
<img width="592" height="952" alt="Screenshot 2025-08-05 193253" src="https://github.com/user-attachments/assets/0950e323-c306-4d07-8658-44fb7630bd37" />
<img width="555" height="988" alt="Screenshot 2025-08-05 193314" src="https://github.com/user-attachments/assets/9858ecac-a96c-4995-b321-170bd1ddc231" />
<img width="557" height="1074" alt="Screenshot 2025-08-05 193334" src="https://github.com/user-attachments/assets/42785094-082e-4de6-99bf-ee5b4d43ecc4" />
<img width="562" height="990" alt="Screenshot 2025-08-05 193539" src="https://github.com/user-attachments/assets/174cd8f1-6fc1-4187-9d82-791423699423" />


App Features

-Random number generation on start and reset
-Text input for user guesses
-Real-time feedback messages
-Restart button to replay the game
-Attempt counter to track guesses
-TypeScript for type safety and cleaner logic

Some Challenges

Designing this app came with a few challenges:

Handling numeric input: Ensuring the TextInput only accepts valid numbers and gracefully handles empty or invalid entries.
State management: Coordinating multiple pieces of state—guess input, feedback message, attempt count, and the target number—without overcomplicating the logic.
User feedback loop: Making the feedback feel responsive and clear, especially when users guess correctly.

These challenges helped us better understand how to structure components, manage state effectively, and design with empathy for the user experience.
