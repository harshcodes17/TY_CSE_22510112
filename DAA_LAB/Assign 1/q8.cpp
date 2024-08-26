#include <bits/stdc++.h>

using namespace std;

int main(){
    int n;
    cin>>n;
    vector<int>v(n);
    for(int i=0;i<n;i++){
        cin>>v[i];
    }
    int num;
    cin>>num;
    sort(v.begin(),v.end());
    int ans = -1;
    for(int i=0;i<n;i++){
        if(v[i]>num){
            ans = i-1;
            break;
        }
    }
    if(ans!=-1){
        cout<<ans<<endl;
    }
    else{
        cout<<n-1<<endl;
    }
    
    return 0;

}