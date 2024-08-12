#include <iostream>
using namespace std;

// Function to move disks
void moveDisk(int n, char source, char destination, char auxiliary) {
    if (n == 1) {
        // Base case: move the only disk from source to destination
        cout << "Move disk 1 from " << source << " to " << destination << endl;
        return;
    }

    // Move n-1 disks from source to auxiliary
    moveDisk(n - 1, source, auxiliary, destination);

    // Move the nth disk from source to destination
    cout << "Move disk " << n << " from " << source << " to " << destination << endl;

    // Move the n-1 disks from auxiliary to destination
    moveDisk(n - 1, auxiliary, destination, source);
}

int main() {
    int n; // Number of disks
    cout << "Enter the number of disks: ";
    cin >> n;

    // Call the moveDisk function
    moveDisk(n, 'A', 'C', 'B');
    return 0;
}
