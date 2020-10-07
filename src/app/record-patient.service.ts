import {Patient} from "./patient.model";

export class PatientService{
  private patients: Patient[] = [
    {'username': "liewliewliew",'password': "66666666",'fullName': "Liew Cai Juan",'idNo': "990606666666",'sex': "F",'age': 6,'birthday': "6/6/1999",'phoneNo': "0166666666",'address': "01 Jalan Kepong",'zip': "47410",'city': "Petaling Jaya",'country': "Malaysia",'state': "Selangor"},
    {'username': "jason123",'password': "abc12345",'fullName': "Jason Liew",'idNo': "990202222222",'sex': "M",'age': 18,'birthday': "2/2/1999",'phoneNo': "0123336666",'address': "02 Jalan Kepong",'zip': "47520",'city': "Petaling Jaya",'country': "Malaysia",'state': "Selangor"},
    {'username': "karl333",'password': "kekwtrihard",'fullName': "Karl Choo",'idNo': "030202222233",'sex': "M",'age': 18,'birthday': "3/2/2003",'phoneNo': "0177737766",'address': "01 Jalan Anandur",'zip': "47320",'city': "Petaling Jaya",'country': "Malaysia",'state': "Selangor"},
    {'username': "ben1999",'password': "hellohello123",'fullName': "Benjamin Choo",'idNo': "9901011111",'sex': "M",'age': 21,'birthday': "1/1/1999",'phoneNo': "0125267732",'address': "01 Jalan Ipoh",'zip': "47400",'city': "Petaling Jaya",'country': "Malaysia",'state': "Selangor"}
    ];
  
  private collection: Patient[] = [];
  
  getPatients(){
    return this.patients;
  }
  
  getCollection(){
    return this.collection;
  }
  
  addToCollection(item:Patient){
    if (this.collection.indexOf(item) !==-1){
      return
    }
    this.collection.push(item);
  }
  
  removeFromCollection(item:Patient){
    this.collection.splice(this.collection.indexOf(item), 1);
  }
}