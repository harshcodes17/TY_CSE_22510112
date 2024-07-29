#include <bits/stdc++.h>

using namespace std;

int main(){
    int n;
    cin>>n;
    vector<int>v(n);
    for(auto &x:v){
        cin>>x;
    }
    int find_element;
    cin>>find_element;

    for(int i=0;i<n;i++){
        if(v[i]==find_element){
            cout<<"Element found at index: ";
            cout<<i;
            return 0;
        }
    }

    return 0;

}