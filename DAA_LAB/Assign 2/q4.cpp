#include <bits/stdc++.h>

using namespace std;

int main(){
    int x,y,s,t;
    cin>>x>>y>>s>>t;
    int ans = 0;
    for(int i=0;i<=x+s;i++){
        for(int j=y;j<=y+s;j++){
            if(i+j<=t){
                ans++;
            }
        }
    }
    cout<<ans<<endl;
    return 0;

}