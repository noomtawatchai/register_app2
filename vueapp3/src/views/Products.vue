<template>
  <v-container>
    <v-form ref="form" v-model="valid" lazy-validation>
     
        <!--  -->
        <v-row>
        <v-col cols="5"
          ><v-text-field
            v-model="no_p"
            :rules="no_pRules"
            :counter="10"
            label="รหัสสินค้า"
            required
          ></v-text-field
        ></v-col>

        <v-col cols="5">
          <v-text-field
            v-model="name_p"
            :counter="30"
            :rules="name_pRules"
            label="ชื่อสินค้า"
            required
          ></v-text-field
        ></v-col>
        </v-row>

        
        
        <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="length_p"
            :counter="20"
            :rules="length_pRules"
            label="ความยาวสินค้า"
            required
          ></v-text-field
        ></v-col>

        <v-col cols="4">
          <v-text-field
            v-model="height_p"
            :counter="20"
            :rules="height_pRules"
            label="ความสูงสินค้า"
            required
          ></v-text-field
        ></v-col>

        <v-col cols="4">
          <v-text-field
            v-model="width_p"
            :counter="20"
            :rules="width_pRules"
            label="ความกว้างสินค้า"
            required
          ></v-text-field
        ></v-col>
        </v-row>

       <v-row>
        <v-col cols="5">
          <v-text-field
            v-model="weight_p"
            :counter="30"
            :rules="weight_pRules"
            label="น้ำหนักสินค้า"
            required
          ></v-text-field
        ></v-col>

        
        <v-col cols="5"
          ><v-text-field
            v-model="n"
            :rules="nRules"
            :counter="10"
            label="จำนวนสินค้า"
            required
          ></v-text-field
        ></v-col>
        </v-row>
      
      
     
      <v-row>
        <v-col cols="5"
          ><v-text-field
            v-model="coin"
            :rules="coinRules"
            :counter="10"
            label="ราคาทุน"
            required
          ></v-text-field
        ></v-col>

        <v-col cols="5"
          ><v-text-field
            v-model="coin_s"
            :rules="coin_sRules"
            :counter="10"
            label="ราคาขาย"
            required
          ></v-text-field
        ></v-col>
      </v-row>

        <v-row>
            
         <v-select
        v-model="c"
        :items="c_Rules"
        :rules="[v => !!v || 'ประเภท']"
        label="กรุณาเลือกประเภท"
        required
      ></v-select>

      <v-col cols="10"
          ><v-text-field
            v-model="P"
            :rules="P_Rules"
            :counter="10"
            label="รายละเอียดสินค้า"
            required
          ></v-text-field
        ></v-col>
        </v-row>



      <v-checkbox
        v-model="checkbox"
        :rules="checkboxRules"
        label="ตรวจสอบแล้ว"
        required
      ></v-checkbox>

      <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
        เพิ่มสินค้า
      </v-btn>

      <v-btn color="error" class="mr-4" @click="reset">
        เคลียร์
      </v-btn>

      <v-row>
        <v-col cols="12">
          <!-- ตารางแสดงข้อมูล -->
          <v-card>
            <v-card-title>
              ข้อมูลลูกค้า
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :search="search"
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>

      <!-- <v-btn
      color="warning"
      @click="resetValidation"
    >
      เคลียร์การตรวจสอบ
    </v-btn> -->
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    name_p: "",
    name_pRules: [
      v => !!v || "กรุณากรอกชื่อสินค้า",
      v => (v && v.length <= 30) || "ชื่อต้องมีขนาดไม่เกิน 30 ตัวอักษร"
    ],
    weight_p: "",
    weight_pRules: [
      v => !!v || "กรุณากรอกน้ำหนักสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    width_p: "",
    width_pRules: [
      v => !!v || "กรุณากรอกความกว้างสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    P: "",
    P_Rules: [
      v => !!v || "กรุณากรอกรายละเอียดสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    coin_s: "",
    coin_sRules: [
      v => !!v || "กรุณากรอกราคาขาย",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    length_p: "",
    length_pRules: [
      v => !!v || "กรุณากรอกความยาวสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
     height_p: "",
    height_pRules: [
      v => !!v || "กรุณากรอกความสูงสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    n: "",
    nRules: [
      v => !!v || "กรุณากรอกจำนวน",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    coin: "",
    coinRules: [
      v => !!v || "กรุณากรอกราคาทุน",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    no_p: "",
    no_pRules: [
      v => !!v || "กรุณากรอกรหัสสินค้า",
      v => (v && v.length <= 10) || "ต้องมีความยาวไม่เกิน 10 หลัก"
    ],
    checkboxRules: [v => !!v || "คุณต้องตรวจสอบสินค้าก่อน"],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    c_Rules: ["คอมพิวเตอร์", "โน๊ตบุค"],
    checkbox: false,
 
    search: "",
    headers: [ 
      { text: "ประเภท", value: "c" },
      {text:"รหัสสินค้า",value:"no_p"},
      {
        text: "ชื่อสินค้า",
        value: "name_p"},
       
         { text: "ความยาวสินค้า", value: "length_p" },
          { text: "ความสูงสินค้า", value: "height_p" },
           { text: "ความกว้างสินค้า", value: "width_p" },
           { text: "น้ำหนักสินค้า", value: "weight_p" },
      { text: "จำนวนสินค้า", value: "n" },
      { text: "ราคาทุน", value: "coin" },
      { text: "ราคาขาย", value: "coin_s" },
      { text: "รายละเอียดสินค้า", value: "P" },
    ],
    desserts: []
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        //   console.log(this.name);
        //   console.log(this.lastname);
        //   console.log(this.email);
        //   console.log(this.tel);
        //   console.log(this.select);
        //   console.log(this.a_number);
        //   console.log(this.a_group);
        //   console.log(this.a_lane);
        //   console.log(this.a_road);
        //   console.log(this.a_subdis);
        //   console.log(this.a_dis);
        //   console.log(this.a_province);
        this.desserts.push({
            name_p:`${this.name_p}`,
            no_p:`${this.no_p}`,
            weight_p:`${this.weight_p}`,
             length_p:`${this.length_p}`,
             height_p:`${this.height_p}`,
             width_p:`${this.width_p}`,
             n:`${this.n}`,
             coin_s:`${this.coin_s}`,
            P:`${this.P}`,
            c:`${this.c}`,
            coin:`${this.coin}`,
            email:`${this.email}`,
            sex:`${this.select}`,
            address:`${this.a_number}ม.${this.a_group}ถ.${this.a_road}ซ.${this.a_lane}ต.${this.a_subdis}อ.${this.a_dis}จ.${this.a_province}`,
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style></style>