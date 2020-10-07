export class Patient{
  public username: string;
  public password: string;
  public fullName: string;
  public idNo: string;
  public sex: string;
  public age: number;
  public birthday: string;
  public phoneNo: string;
  public address: string;
  public zip: string;
  public city: string;
  public country: string;
  public state: string;
  
  constructor(username: string, password: string, fullName: string, idNo: string, sex: string, age: number, birthday: string, phoneNo: string, address: string, zip: string, city: string, country: string, state: string){
    this.username= username;
    this.password= password;
    this.fullName= fullName;
    this.idNo= idNo;
    this.sex= sex;
    this.age= age;
    this.birthday= birthday;
    this.phoneNo= phoneNo;
    this.address= address;
    this.zip= zip;
    this.city= city;
    this.country= country;
    this.state= state;
  }
}
