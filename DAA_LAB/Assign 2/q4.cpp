#include <iostream>
#include <algorithm>

using namespace std;

int main() {
    int X, Y, s, T;
    cin >> X >> Y >> s >> T;

    int count = 0;

    // Iterate over all possible positions (a, b) that the frog can reach in T seconds
    for (int a = 0; a <= T; ++a) {
        for (int b = 0; b <= T; ++b) {
            if (a + b <= T) {
                int frogX = a; // The x-coordinate of the frog
                int frogY = b; // The y-coordinate of the frog
                
                // Check if the frog's position lies inside the square
                if (frogX >= X && frogX <= X + s && frogY >= Y && frogY <= Y + s) {
                    ++count;
                }
            }
        }
    }

    // Output the result
    cout << count << endl;

    return 0;
}
