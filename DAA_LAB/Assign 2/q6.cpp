#include <bits/stdc++.h>

using namespace std;

int main(){
    // cout<<"Enter the number of elements in the sorted array: ";
    int n;
    cin>>n;
    vector<int>v(n);
    // cout<<"Enter the elements of the sorted array: ";
    for(int i=0;i<n;i++){
        cin>>v[i];
    }
    int find_element;
    // cout<<"Enter the element to be found: ";
    cin>>find_element;
    int left = 0;
    int right = n-1;

    while(left<=right){
        int mid = (left+right)/2;
        if(v[mid]==find_element){
            cout<<"Element found at index: ";
            cout<<mid<<endl;
            return 0;
        }
        else if(v[mid]<find_element){
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
    return 0;

}