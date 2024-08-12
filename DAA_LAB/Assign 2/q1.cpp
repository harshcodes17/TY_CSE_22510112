#include <bits/stdc++.h>

using namespace std;

int main(){
    int n;
    // cout << "Enter the number of days: ";
    cin>>n;
    vector<int>v(n);
    // cout << "Enter the working hour per day: ";
    for(int i=0;i<n;i++){
        cin>>v[i];
    }
    int ans=0;
    vector<int>bin;
    for(int i=0;i<n;i++){
        if(v[i]>6){
            bin.push_back(1);
        }
        else{
            bin.push_back(0);
        }
    }
    int sum = 0;

    for(int i=0;i<n;i++){
        if(bin[i]==1){
            sum++;
        }
        else{
            ans = max(ans,sum);
            sum=0;
        }
    }
    ans = max(ans,sum);
    cout<<"Rating of the employee is: ";
    cout<<ans<<endl;
    return 0;

}
