#include <bits/stdc++.h>

using namespace std;


void merge(vector<int>& v,int l,int r,int m){
    int n1=m-l+1;
    int n2=r-m;
    vector<int>left(n1);
    vector<int>right(n2);
    //using extra space to store the left and right subarrays
    for(int i=0;i<n1;i++){
        left[i]=v[l+i];
    }
    for(int i=0;i<n2;i++){
        right[i]=v[m+1+i];
    }
    int i=0,j=0,k=l;
    while(i<n1 && j<n2){
        if(left[i]<=right[j]){ //comparing and sorting the elements
            v[k]=left[i];
            i++;
        }
        else{
            v[k]=right[j];
            j++;
        }
        k++;
    }
    while(i<n1){ //adding remaining elements
        v[k]=left[i];
        i++;
        k++;
    }
    while(j<n2){ //adding remaining elements
        v[k]=right[j];
        j++;
        k++;
    }

}

void merge_sort(vector<int>& v,int l,int r){
    if(l<r){
        int m=l+(r-l)/2;
        merge_sort(v,l,m);// left half
        merge_sort(v,m+1,r);// right half
        merge(v,l,r,m);// merging the two halves
    }
}


int main(){
    cout<<"Enter the number of elements in the array: ";
    int n;
    cin>>n;
    vector<int>v(n);
    for(int i=0;i<n;i++){
        cin>>v[i];
    }
    cout<<"The array before sorting is: ";
    for(auto x:v){
        cout<<x<<" ";
    }
    cout<<endl;
    merge_sort(v,0,n-1);
    cout<<"The array after sorting is: ";
    for(auto x:v){
        cout<<x<<" ";
    }
    cout<<endl;
    return 0;

}
//Time Complexity: O(nlogn)
//Space Complexity: O(n) + recusrive stack space O(logn)