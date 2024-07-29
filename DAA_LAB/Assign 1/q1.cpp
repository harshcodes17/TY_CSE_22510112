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

int mv1in() {
    vector<int> v1 = {1, 2, 3, 4, 5, 0, 0, 0, 0, 0}; 
    vector<int> v2 = {2, 4, 6, 8, 10}; 

    int m = 5; 
    int n = 5;

    merge(v1, m, v2, n);

    for (int num : v1){
        cout << num << " ";
    }

    return 0;
}