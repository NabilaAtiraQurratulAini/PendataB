**LANGKAH-LANGKAH MENGIMPOR DATA IRIS KE ELEPHANTSQL, POSTGRESQL, MYSQL, dan POWER BI**



Aplikasi yang Wajib Disiapkan :

- Postgresql [Community DL Page (enterprisedb.com)](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads)
- XAMPP Control Panel [XAMPP Download Success (apachefriends.org)](https://www.apachefriends.org/download_success.html)
- Power BI [Downloads | Microsoft Power BI](https://powerbi.microsoft.com/en-us/downloads/)



Berikut langkah-langkah untuk mengumpulkan data dari berbagai sumber :

**A. Membuat Akun di ElephantSQL**

1. Pertama Log In di web ElephantSQL [ElephantSQL - PostgreSQL as a Service](https://www.elephantsql.com/).

2. Untuk Log In di sini, terhubung dengan akun github.

3. Pada bagian Instance, buat nama apa saja.

4. Lalu klik Create New Instance untuk membuat instance baru.

5. Di bagian Plan beri nama pendatab dan klik Select Region.

6. Di bagian Region klik Review.

7. Configure(Dedicated plans only) klik Create Instance dan Confirm.

   ![Screenshot (1087)](C:\Users\asus\Pictures\Screenshots\Screenshot (1087).png)



**B. Koneksi ElephantSQL ke PostgreSQL**

1. Buka aplikasi PostgreSQL atau pgAdmin 4 terlebih dahulu.

2. Pada halaman depan PostgreSQL ke Servers yang terletak di sebelah kiri.

3. Lalu klik kanan pada Servers, pilih Register dan pilih Server.

4. Di Register - Server General bagian Name beri nama yang sama seperti nama yang dibuat di ElephantSQL.

   ![Screenshot (1088)](C:\Users\asus\Pictures\Screenshots\Screenshot (1088).png)

5. Di Register - Server Connection bagian Host name or address, Post, Maintenance database, Username, dan Password isi seperti yang ada di ElephantSQL dan klik Save.

   ![Screenshot (1090)](C:\Users\asus\Pictures\Screenshots\Screenshot (1090).png)

   ![Screenshot (1089)](C:\Users\asus\Pictures\Screenshots\Screenshot (1089).png)

6. Jika koneksi berhasil, maka server dengan nama pendatab akan muncul.

   ![image-20230302162239662](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302162239662.png)



**C. Import Data Github ke PostgreSQL.**

1. Masuk ke server pendatab dan cari database dengan nama yang telah dibuat.

   ![image-20230302162959740](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302162959740.png)

2. Klik Schemas, masuk ke public dan klik Tables.

3. Di Tables klik kanan dan pilih Query Tool.

4. Pada halaman ini, buat table iris dari github [iris-dataset-postgres (github.com)](https://gist.github.com/faustofjunqueira/ba97008616148653a9c633c066edaba9).

   ![image-20230302164339625](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302164339625.png)

5. Jika berhasil, maka iris akan muncul di tables database dan tampilkan semua data iris yang telah dibuat.

   ![image-20230302164745261](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302164745261.png)



**D. Membuat Server Lokal di PostgreSQL**

1. Pada halaman depan PostgreSQL ke Servers yang terletak di sebelah kiri.

2. Lalu klik kanan pada Servers, pilih Register dan pilih Server.

3. Di Register - Server General bagian Name beri nama localpendatab.

   ![image-20230302165839098](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302165839098.png)

4. Di Register - Server Connection bagian Host name or address, Post, Maintenance database, Username, dan Password isi seperti di bawah ini dan klik Save.

   ![image-20230302165951512](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302165951512.png)

5. Jika koneksi berhasil, maka server dengan nama localpendatab akan muncul.

   ![image-20230302170138924](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302170138924.png)

6. Buat database di server localpendata dengan nama databaseiris.

   ![image-20230302170609351](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302170609351.png)

7. Jika berhasil, maka database dengan databaseiris akan muncul.

   ![image-20230302170532024](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302170532024.png)

8. Kemudian di database iris masuk ke Schemas, masuk ke public, klik Tables.

9. Di Tables klik kanan dan pilih Query Tool.

10. Pada halaman ini, buat table iris dari github [iris-dataset-postgres (github.com)](https://gist.github.com/faustofjunqueira/ba97008616148653a9c633c066edaba9).

11. Untuk langkah-langkahnya sama seperti di atas.



**E. Meng-export Data Iris dari PostgreSQL ke csv**

1. Pilih salah satu table iris yang ada di PostgreSQL.

2. Padat table iris tersebut klik kanan dan pilih Import/Export Database.

3. Pilih Filename untuk tempat penyimpanan database tersebut dengan Format csv dan klik Ok.

   ![image-20230302171718255](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302171718255.png)



**F. Import Data iris.csv ke phpMyAdmin**

1. Nyalakan XAMPP terlebih dahulu dengan klik start di Module Apache dan MySQL.

   ![image-20230302172323117](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302172323117.png)

2. Masuk ke web phpMyAdmin [localhost / 127.0.0.1 | phpMyAdmin 5.1.1](http://localhost/phpmyadmin/).

3. Buat database baru dengan nama datairis.

   ![image-20230302180410386](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302180410386.png)

4. Di database tersebut klik import di bagian atas, pilih file yang ingin kita import dan klik kirim.

   ![image-20230302173112875](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302173112875.png)

5. Jika berhasil makan akan ada tulisan berhasil.

   ![image-20230302173346094](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302173346094.png)



**G. Import Data iris.csv dari Excel ke Power BI**

1. Buka aplikasi Power BI.

2. Pada halaman depan, klik Dapatkan data.

   ![image-20230302201414687](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302201414687.png)

3. Lakukan pencarian Text or CSV di Dapatkan data dan klik Sambung.

   ![image-20230302205411116](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302205411116.png)

4. Setelah klik Sambung, dilarikan ke File Explorer untuk memilih data yang akan di import dan klik Buka.

   ![image-20230302205900249](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302205900249.png)

5. Data yang di import telah tampil, sekarang klik Muat untuk menampilkan data di Power BI.

   ![image-20230302210141069](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302210141069.png)

6. Ini adalah datairis.csv yang telah berhasil di Muat.

   ![image-20230302210715177](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302210715177.png)

7. Untuk menampilkan data berupa diagram batang, di Visualisasi klik diagram ke 4 dari kiri.

   ![image-20230302211035309](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302211035309.png)

8. Data yang ditampilkan berupa diagram batang.

   ![image-20230302211115279](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302211115279.png)

   

**H. Import Database iris dari PostgreSQL ke Power BI**

1. Pada halaman depan, klik Dapatkan data.

   ![image-20230302201414687](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302201414687.png)

2. Lakukan pencarian Database PostgreSQL di Dapatkan data dan klik Sambung.

   ![image-20230302213309117](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302213309117.png)

3. Masukkan Server dan Database yang sesuai dengan PostgreSQL dan klik Ok.

   ![image-20230302214119813](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302214119813.png)

4. Masukkan Nama pengguna, Sandi dan klik Hubungkan.

   ![image-20230302214227785](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302214227785.png)

5. Jika tehubung, maka database datairis masuk ke Navigator dan Muat.

6. Ini adalah datairis yang telah berhasil di Muat.

   ![image-20230302220519093](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302220519093.png)



**I. Import Database iris dari PostgreSQL ElephantSQL ke Power BI**

1. Pada halaman depan, klik Dapatkan data.

   ![image-20230302201414687](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302201414687.png)

2. Lakukan pencarian Database PostgreSQL di Dapatkan data dan klik Sambung.

   ![image-20230302213309117](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302213309117.png)

3. Masukkan Server dan Database yang sesuai dengan ElephantSQL dan klik Ok.

   ![image-20230302223257859](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302223257859.png)

4. Masukkan Nama pengguna, Sandi dan klik Hubungkan.

5. Jika tehubung, maka database datairis masuk ke Navigator dan Muat.

   ![image-20230302223444026](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302223444026.png)

6. Ini adalah datairis yang telah berhasil di Muat.

   ![image-20230302223700262](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302223700262.png)



**J. Koneksi MySQL ke Power BI**

1. Download mysql-installer-web-community-8.0.32.0 [MySQL :: Download MySQL Installer](https://dev.mysql.com/downloads/windows/installer/8.0.html) dan klik Download.

   ![image-20230302203217344](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302203217344.png)

2. Pada halaman ini klik No thanks, just start my download.

   ![image-20230302203404535](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302203404535.png)

3. Download mysql-connector-net-8.0.32 [MySQL :: Download Connector/NET](https://dev.mysql.com/downloads/connector/net/) dan klik Download.

   ![image-20230302204509095](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302204509095.png)

4. Pada halaman ini klik No thanks, just start my download.

   ![image-20230302204633174](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302204633174.png)

   

**K. Import Database iris dari phpMyAdmin ke Power BI**

1. Pada halaman depan, klik Dapatkan data.

   ![image-20230302201414687](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302201414687.png)

2. Lakukan pencarian Database MySQL di Dapatkan data dan klik Sambung.

   ![image-20230302175809599](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302175809599.png)

3. Masukkan Server dan Database yang sesuai dengan phpMyAdmin dan klik Ok.

   ![image-20230302180600613](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302180600613.png)

4. Disini pilih Database, lalu masukkan Nama pengguna, Sandi dan klik Hubungkan.

   ![image-20230302204830592](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302204830592.png)

5. Jika tehubung, maka database datairis masuk ke Navigator dan Muat.

   ![image-20230302202001704](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20230302202001704.png)

6. Ini adalah datairis yang telah berhasil di Muat.

   ![Screenshot (1103)](C:\Users\asus\Pictures\Screenshots\Screenshot (1103).png)