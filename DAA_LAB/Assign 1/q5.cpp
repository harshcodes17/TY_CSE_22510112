#include <bits/stdc++.h>

using namespace std;

int main(){
    int n;
    cin>>n;
    vector<string>v(n);

    for(int i=0;i<n;i++){
        cin>>v[i];
    }
    string s;
    cin>>s;
    
    for(int i=0;i<n;i++){
        if(v[i]==s){
            cout<<"String found at index: ";
            cout<<i;
            return 0;
        }
    }
    return 0;

}