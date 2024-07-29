#include <bits/stdc++.h>

using namespace std;

int main(){
    int n;
    cin>>n;
    vector<int>v(n);
    for(int i=0;i<n;i++){
        cin>>v[i];
    }
    sort(v.begin(),v.end());
    int num;
    cin>>num;

    int rank=0;
    auto it = lower_bound(v.begin(),v.end(),num);
    rank = it-v.begin();
    cout<<rank<<endl;
    return 0;

}