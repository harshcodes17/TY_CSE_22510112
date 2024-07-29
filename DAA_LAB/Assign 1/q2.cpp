#include <bits/stdc++.h>

using namespace std;

int main(){
    int n;
    cin>>n;
    vector<string>arr(n);
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    vector<pair<string,int>>v;
    for(int i=0;i<n;i++){
        v.push_back({arr[i],i});
    }
    for(auto &[str,idx]:v){
        sort(str.begin(),str.end());
    }
    sort(v.begin(),v.end());
    vector<string>ans;
    for(auto &[str,idx]:v){
        ans.push_back(arr[idx]);
    }
    for(auto &str:ans){
        cout<<str<<" ";
    }
    return 0;

}