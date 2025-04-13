# Input  
There’s no actual user input like buttons or text fields in this app — the “input” here is hardcoded. We just type in the name, degree program, and school directly in the code (inside `index.tsx`). So basically, the developer is the input source in this case, not the user.

# Process  
When the app runs, React Native takes that hardcoded info and renders it using a single `View` container and three `Text` components. The `StyleSheet` applies the yellow background and centers the content nicely. Since we’re using Expo, everything compiles and runs in a virtual device or browser preview through `npx expo start`.

# Output  
What you see on the screen is a clean yellow page with black text showing the name, degree, and school. It's simple, focused, and meets all the constraints (just 5 components total). Perfect for a “HelloWorld” intro app!
