#include <bits/stdc++.h>

using namespace std;

int main(){
    int n;
    // cout << "Enter the number of boxes: ";
    cin>>n;
    int k;
    // cout << "Enter the number of candies: ";
    cin>>k;
    int ck = k;
    int a[n];
    int idx = 0;
    while(k--){
        a[idx]++;
        idx = (idx+1)%n;
        
    }
    cout<<"The "<<ck<<"th candy is in the "<<idx<<"th box"<<endl;
    return 0;

}