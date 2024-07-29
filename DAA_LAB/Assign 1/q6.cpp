#include <iostream>
#include <vector>

using namespace std;

pair<int, int> findElement(const vector<vector<int>>& matrix, int target) {
    if (matrix.empty() || matrix[0].empty()) {
        return {-1, -1};
    }

    int rows = matrix.size();
    int cols = matrix[0].size();
    int row = 0;
    int col = cols - 1;

    while (row < rows && col >= 0) {
        if (matrix[row][col] == target) {
            return {row, col}; 
        } else if (matrix[row][col] > target) {
            col--; 
        } else {
            row++;
        }
    }

    return {-1, -1};
}

int main() {
    int n,m;
    cin>>n>>m;
    vector<vector<int>> matrix;
    for(int i=0;i<n;i++){
        vector<int>temp(m);
        for(int j=0;j<m;j++){
            cin>>temp[j];
        }
        matrix.push_back(temp);
    }

    int target;
    cin>>target;
    pair<int, int> result = findElement(matrix, target);

    if (result.first != -1) {
        cout << "Element found at position: (" << result.first << ", " << result.second << ")" << endl;
    } else {
        cout << "Element not found" << endl;
    }

    return 0;
}