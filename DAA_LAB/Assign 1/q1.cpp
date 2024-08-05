#include <iostream>
#include <vector>

using namespace std;

void merge(vector<int>& v1, int m, vector<int>& v2, int n) {
    int i = m - 1; 
    int j = n - 1; 
    int k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (v1[i] > v2[j]) {
            v1[k--] = v1[i--];
        } else {
            v1[k--] = v2[j--];
        }
    }

    while (j >= 0) {
        v1[k--] = v2[j--];
    }
}

int main() {
    vector<int> v1 = {1, 3, 5, 0, 0, 0}; // v1 has extra space for v2 elements
    vector<int> v2 = {2, 4, 6};
    int m = 3; // Number of valid elements in v1
    int n = 3; // Number of elements in v2

    merge(v1, m, v2, n);

    for (int num : v1) {
        cout << num << " ";
    }
    cout << endl;

    return 0;
}