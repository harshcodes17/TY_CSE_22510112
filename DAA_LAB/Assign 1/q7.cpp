#include <bits/stdc++.h>

using namespace std;

int main(){
    int n;
    cin>>n;
    vector<pair<int,int>>v(n);
    for(int i=0;i<n;i++){
        pair<int,int>temp;
        cin>>temp.first>>temp.second;
        v[i] = temp;
    }
    sort(v.begin(),v.end(),[](auto a,auto b){
        if(a.first==b.first){
            return a.second<b.second;
        }
        return a.first<b.first;
    });
    for(int i=0;i<n;i++){
        cout<<v[i].first<<" "<<v[i].second<<endl;
    }

    return 0;

}