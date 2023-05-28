Search.setIndex({"docnames": ["PendataB/README", "Tugas/DataWeather", "Tugas/ImportPowerBI", "Tugas/NaiveBayes", "Tugas/PCAIrisDataset", "Tugas/Tugas1", "Tugas/UTS", "intro", "markdown", "markdown-notebooks", "notebooks"], "filenames": ["PendataB/README.md", "Tugas/DataWeather.ipynb", "Tugas/ImportPowerBI.ipynb", "Tugas/NaiveBayes.ipynb", "Tugas/PCAIrisDataset.ipynb", "Tugas/Tugas1.ipynb", "Tugas/UTS.ipynb", "intro.md", "markdown.md", "markdown-notebooks.md", "notebooks.ipynb"], "titles": ["PendataB", "<strong>DECISION TREE CLASSIFIER DATA WEATHER</strong>", "<strong>LANGKAH-LANGKAH MENGIMPOR DATA IRIS KE ELEPHANTSQL, POSTGRESQL, MYSQL, dan POWER BI</strong>", "<strong>DASAR-DASAR PEMBELAJARAN MESIN : KLASIFIKASI NAIVE BAYES</strong>", "&lt;no title&gt;", "<strong>MENGIMPOR DATA IRIS KE POSTGRESQL</strong>", "<strong>UTS - ANALISA DATA KLASIFIKASI</strong>", "Welcome to your Jupyter Book", "Markdown Files", "Notebooks with MyST Markdown", "Content with notebooks"], "terms": {"perhitungan": 1, "entropi": 1, "gain": 1, "dari": [1, 3, 5], "diata": 1, "maka": [1, 2], "didapatkan": 1, "nilai": [1, 3], "mase": [1, 3], "dan": [1, 3, 5, 7], "kemudian": [1, 2, 5], "tersebut": [1, 2], "dimasukkan": 1, "ke": [1, 3, 7], "dalam": [1, 3], "tabel": [1, 3], "selanjutnya": 1, "dengan": [1, 2, 3, 5], "tertinggi": 1, "yaitu": [1, 3], "humid": 1, "sebesar": 1, "0": [1, 2, 3, 4, 5, 6, 10], "37051": 1, "dapat": [1, 3], "menjadi": [1, 3], "node": [1, 6], "akar": 1, "lalu": [1, 2], "dilanjutkan": 1, "sesuai": [1, 2, 3], "yang": [1, 2, 3, 5], "terendah": 1, "berikut": [1, 5], "adalah": [1, 2, 3, 5], "mulai": 1, "pemrograman": 1, "hal": [1, 3], "pertama": [1, 2, 3], "haru": [1, 3], "dilakukan": 1, "menginst": 1, "dependensi": 1, "atau": [1, 2], "pustaka": 1, "akan": [1, 2, 3], "membuat": 1, "program": [1, 3], "ini": [1, 2, 3], "lebih": [1, 3], "mudah": 1, "untuk": [1, 2, 3], "dituli": 1, "saya": [1, 3], "mengimpor": [1, 3, 7], "perpustakaan": [1, 3], "pembelajaran": [1, 7], "mesin": [1, 7], "sklearn": [1, 3, 4, 6], "panda": [1, 3, 4, 5, 6], "pydontplu": 1, "ipython": [1, 4, 5, 6], "displai": [1, 9], "import": [1, 3, 4, 5, 6, 10], "depend": [1, 8], "from": [1, 3, 4, 5, 6, 10], "For": [1, 8, 10], "our": [1, 6], "pd": [1, 3, 4, 5, 6], "datafram": [1, 3, 5], "pydotplu": 1, "To": 1, "creat": [1, 2, 4, 6, 10], "graph": 1, "imag": [1, 10], "kumpulan": [1, 3], "digunakan": [1, 3], "contoh": 1, "pada": [1, 2, 3], "pohon": 1, "keputusan": 1, "terlebih": [1, 2], "dahulu": [1, 2], "bingkai": 1, "kosong": 1, "memasukkan": 1, "setiap": [1, 3], "kolom": 1, "fitur": [1, 3], "atribut": 1, "outlook": 1, "temperatur": 1, "windi": 1, "plai": 1, "dataset": [1, 2, 3, 6], "empti": [1, 6], "frame": 1, "golf_df": 1, "add": 1, "sunni": 1, "overcast": 1, "raini": 1, "hot": [1, 10], "mild": 1, "cool": 1, "high": [1, 4], "normal": 1, "fals": [1, 6], "true": [1, 4, 6], "final": 1, "ye": 1, "print": [1, 3, 4, 5, 6, 9], "show": [1, 3, 4, 6, 7, 8, 9], "new": [1, 2, 6], "1": [1, 2, 3, 4, 5, 6, 10], "2": [1, 3, 4, 5, 6, 9], "3": [1, 3, 4, 5, 6], "4": [1, 2, 3, 4, 5, 6, 9, 10], "5": [1, 2, 3, 4, 5, 6, 10], "6": [1, 3, 4, 5, 6], "7": [1, 3, 4, 5, 6], "8": [1, 2, 3, 4, 5], "9": [1, 3, 5, 6], "10": [1, 3, 4, 5, 6, 10], "11": [1, 3], "12": [1, 3], "13": [1, 3], "sekarang": [1, 2], "mengubah": 1, "variabel": [1, 3], "kategori": 1, "dummi": 1, "indik": 1, "biner": 1, "dasarnya": 1, "convert": [1, 4, 9], "categor": [1, 3], "variabl": 1, "indic": [1, 6], "binari": 1, "vairbl": 1, "essentiali": 1, "s": [1, 4, 5, 8, 9, 10], "i": [1, 4, 6], "chose": 1, "name": [1, 2, 4, 6], "one_hot_data": 1, "bescaus": 1, "ml": 1, "one": [1, 8], "group": 1, "bit": 1, "among": 1, "which": [1, 9], "legal": 1, "combin": 1, "valu": [1, 3, 4, 6], "ar": [1, 6, 8, 9], "onli": [1, 2, 6], "those": [1, 8], "singl": 1, "all": [1, 6, 8, 9], "other": [1, 9], "low": [1, 4], "get_dummi": 1, "outlook_overcast": 1, "outlook_raini": 1, "outlook_sunni": 1, "temperature_cool": 1, "temperature_hot": 1, "temperature_mild": 1, "humidity_high": 1, "humidity_norm": 1, "windy_fals": 1, "windy_tru": 1, "akhirnya": 1, "sampai": 1, "titik": 1, "melatih": [1, 3], "pengklasifikasi": 1, "model": [1, 3, 6], "The": [1, 6, 8, 9], "clf": [1, 6], "decisiontreeclassifi": 1, "train": [1, 6], "clf_train": 1, "fit": [1, 3, 6], "grafik": 1, "mendapatkan": 1, "visual": [1, 4], "baik": 1, "apa": [1, 2], "mencetak": 1, "dot": [1, 4], "menggunakan": [1, 3], "metod": 1, "graph_from_dat_data": 1, "menampilkan": [1, 2, 5], "gambar": 1, "export": 1, "format": [1, 2, 3, 6], "export_graphviz": 1, "none": [1, 4, 5, 6], "dot_data": 1, "out_fil": 1, "feature_nam": 1, "list": [1, 4, 5, 6], "column": [1, 4, 5], "class_nam": 1, "not_plai": 1, "round": 1, "fill": 1, "gini": 1, "decid": 1, "attribut": 1, "featur": [1, 6], "should": [1, 9], "place": 1, "root": 1, "act": 1, "intern": [1, 8], "leaf": [1, 6], "graph_from_dot_data": 1, "create_png": 1, "digraph": 1, "shape": [1, 4, 6], "box": [1, 8], "fontnam": 1, "helvetica": 1, "edg": 1, "label": [1, 4, 6], "x": [1, 3, 4, 6], "ngini": 1, "459": 1, "nsampl": 1, "14": [1, 3], "nvalu": 1, "labeldist": 1, "labelangl": 1, "45": 1, "headlabel": 1, "32": [1, 2], "terakhir": 1, "namun": 1, "tidak": [1, 3], "kalah": 1, "pentingnya": 1, "buat": [1, 2], "prediksi": [1, 3], "sebagai": [1, 3], "cerah": 1, "suhu": 1, "pana": 1, "kelembaban": 1, "salah": [1, 2, 3], "memperkirakan": 1, "masukan": 1, "itu": 1, "ya": 1, "artinya": 1, "pegolf": 1, "bermain": 1, "golf": 1, "hari": 1, "selesai": 1, "tentu": 1, "saja": [1, 2, 6], "hanyalah": 1, "sederhana": 1, "kenyataannya": 1, "anda": [1, 3], "kemungkinan": 1, "besar": 1, "mengunggah": 1, "alih": 1, "membuatnya": 1, "membersihkan": 1, "menjelajahi": 1, "membagi": [1, 3], "pelatihan": [1, 3], "rangkaian": 1, "pengujian": [1, 3], "menguji": 1, "akurasi": [1, 3], "beberapa": [1, 3], "metrik": 1, "statistik": 1, "test": [1, 4, 6], "predict": [1, 3, 6, 8], "input": [1, 4, 5, 6, 8], "usr": [1, 4, 5, 6], "local": [1, 4, 5, 6], "lib": [1, 4, 5, 6], "python3": [1, 4, 5, 6], "dist": [1, 4, 5, 6], "packag": [1, 4, 5, 6], "base": [1, 6, 9], "py": [1, 4, 5, 6], "439": [1, 6], "userwarn": [1, 6], "doe": [1, 6, 7], "have": [1, 6, 9], "valid": [1, 6], "wa": [1, 6], "warn": [1, 6], "arrai": [1, 3, 4, 6, 10], "dtype": [1, 3, 4, 6], "object": [1, 4, 6], "aplikasi": 2, "wajib": 2, "disiapkan": 2, "commun": 2, "dl": 2, "page": [2, 3, 6, 7, 8, 9], "enterprisedb": 2, "com": [2, 3, 6], "xampp": 2, "control": [2, 6], "panel": 2, "download": 2, "success": [2, 5], "apachefriend": 2, "org": [2, 3, 5, 6, 8], "microsoft": 2, "log": 2, "In": [2, 3, 6, 8], "web": 2, "servic": 2, "sini": [2, 3], "terhubung": 2, "bagian": 2, "instanc": 2, "nama": 2, "klik": 2, "baru": 2, "plan": 2, "beri": 2, "pendatab": 2, "select": [2, 5], "region": 2, "review": 2, "configur": 2, "dedic": 2, "confirm": [2, 4], "buka": 2, "pgadmin": 2, "halaman": 2, "depan": 2, "terletak": 2, "sebelah": 2, "kiri": 2, "kanan": 2, "pilih": 2, "regist": 2, "gener": 2, "sama": 2, "seperti": [2, 3], "dibuat": [2, 3], "connect": [2, 5], "host": [2, 5], "address": [2, 5], "post": [2, 10], "mainten": 2, "usernam": 2, "password": [2, 5], "isi": 2, "ada": [2, 3], "save": [2, 6], "jika": 2, "berhasil": [2, 3], "muncul": 2, "masuk": 2, "cari": 2, "telah": [2, 3, 5], "schema": 2, "public": [2, 5], "tabl": 2, "queri": [2, 5], "tool": [2, 8], "postgr": [2, 5], "tampilkan": 2, "semua": 2, "localpendatab": 2, "bawah": 2, "localpendata": 2, "databaseiri": 2, "langkahnya": 2, "ata": [2, 3], "satu": [2, 3], "padat": 2, "filenam": [2, 6], "tempat": 2, "penyimpanan": 2, "ok": [2, 4], "nyalakan": 2, "start": [2, 8, 9], "modul": 2, "apach": 2, "localhost": [2, 5], "127": [2, 5], "datairi": 2, "file": [2, 4, 5, 6, 7, 9], "ingin": 2, "kita": [2, 3], "kirim": 2, "makan": 2, "tulisan": 2, "dapatkan": 2, "lakukan": 2, "pencarian": 2, "text": [2, 8, 9], "sambung": 2, "setelah": [2, 3], "dilarikan": 2, "explor": 2, "memilih": 2, "tampil": 2, "muat": 2, "berupa": 2, "diagram": 2, "batang": 2, "visualisasi": 2, "ditampilkan": [2, 3], "masukkan": 2, "pengguna": 2, "sandi": 2, "hubungkan": 2, "tehubung": 2, "navig": 2, "instal": [2, 5], "No": [2, 4], "thank": 2, "just": [2, 5, 8], "my": [2, 6], "connector": 2, "net": 2, "disini": 2, "langkah": [3, 7], "biasa": 3, "selalu": 3, "mencakup": 3, "numpi": [3, 4, 5, 6, 10], "matplotlib": [3, 4, 6, 10], "np": [3, 4, 6, 10], "pyplot": [3, 4, 6, 10], "plt": [3, 4, 6, 10], "himpunan": 3, "data": [3, 7, 10], "iri": [3, 4, 7], "flower": 3, "disimpan": 3, "di": [3, 5], "repositori": 3, "github": [3, 5, 6], "menyimpannya": 3, "kami": 3, "menetapkan": 3, "independen": 3, "dependen": 3, "spesi": 3, "y": [3, 4, 6], "bari": 3, "irisdataset": 3, "csvdataset": 3, "read_csv": [3, 4, 6], "http": [3, 5, 6], "raw": [3, 6], "githubusercont": [3, 6], "mk": 3, "gurucharan": 3, "classif": 3, "master": [3, 6], "csv": [3, 4, 5, 6], "iloc": [3, 4, 6], "speci": 3, "head": [3, 4, 5, 6], "sepal_length": [3, 5], "sepal_width": [3, 5], "petal_length": [3, 5], "petal_width": [3, 5], "setosa": [3, 4, 5], "memisahkan": 3, "set": [3, 6], "memperoleh": 3, "150": 3, "50": [3, 4, 6], "kela": 3, "karena": 3, "diberikan": 3, "urutan": 3, "kontinu": 3, "perlu": 3, "secara": 3, "acak": 3, "memiliki": 3, "berarti": 3, "bahwa": 3, "20": [3, 6], "tujuan": 3, "80": 3, "sisanya": 3, "test_siz": [3, 6], "model_select": [3, 6], "train_test_split": [3, 6], "x_train": [3, 6], "x_test": [3, 6], "y_train": [3, 6], "y_test": [3, 6], "penskalaan": 3, "diperkecil": 3, "rentang": 3, "kecil": 3, "opsi": 3, "meningkatkan": 3, "kecepatan": 3, "x_trainx_test": 3, "preprocess": [3, 4, 6], "standardscal": [3, 4, 6], "sc": [3, 6], "fit_transform": [3, 4, 6], "transform": [3, 6], "memperkenalkan": 3, "gaussian": 3, "lain": 3, "bernoulli": 3, "multinomi": 3, "gaussiannb": [3, 6], "gaussiannbsklearn": 3, "naive_bayesclassifi": 3, "naive_bay": [3, 6], "classifi": [3, 6, 7], "jupyt": [3, 6, 8, 9, 10], "environ": [3, 6], "pleas": [3, 6], "rerun": [3, 6], "thi": [3, 6, 7, 8, 9, 10], "cell": [3, 4, 5, 6], "html": [3, 6, 10], "represent": [3, 6], "trust": [3, 6], "notebook": [3, 6, 8], "On": [3, 6], "unabl": [3, 6], "render": [3, 6, 8], "try": [3, 5, 6], "load": [3, 6], "nbviewer": [3, 6], "gaussiannbgaussiannb": 3, "memprediksi": 3, "hasil": 3, "te": 3, "dilatih": 3, "uji": 3, "diprediksi": 3, "y_pred": [3, 6], "virginica": [3, 4], "versicolor": [3, 4], "u10": 3, "matrik": 3, "kebingungan": 3, "banyak": 3, "teknik": 3, "melihat": 3, "terlatih": 3, "memplot": 3, "menunjukkan": 3, "jumlah": 3, "benar": 3, "masalah": 3, "ketika": 3, "sebenarnya": 3, "diketahui": 3, "metric": [3, 6], "confusion_matrix": 3, "cm": [3, 10], "accuracy_scor": [3, 6], "accuraci": [3, 6], "9333333333333333": 3, "menyimpulkan": 3, "30": [3, 6], "29": 3, "diklasifikasikan": 3, "hanya": 3, "memberi": 3, "tinggi": 3, "96": [3, 6], "67": [3, 6], "membandingkan": 3, "riil": 3, "asli": 3, "df": [3, 4, 5, 6], "real": 3, "15": [3, 6], "16": [3, 5], "17": 3, "18": [3, 6], "19": [3, 6], "21": [3, 5], "22": [3, 5], "23": 3, "24": 3, "25": [3, 6], "26": 3, "27": 3, "28": 3, "tambahan": 3, "terlalu": 3, "informatif": 3, "terutama": 3, "regresi": 3, "memeriksa": 3, "keakuratan": 3, "lihat": 3, "bukan": 3, "kesimpulan": 3, "demikian": 3, "cerita": 3, "membangun": 3, "mampu": 3, "mengklasifikasikan": 3, "bunga": 3, "tergantung": 3, "karakteristik": 3, "diimplementasikan": 3, "diuji": 3, "tersedia": 3, "internet": 3, "pengambilan": 5, "menarik": 5, "dibaca": 5, "python": 5, "dijadikan": 5, "databas": 5, "pip": 5, "psycopg2": 5, "look": 5, "index": [4, 5, 6], "pypi": 5, "simpl": [5, 8], "us": [5, 6, 8, 9], "pkg": 5, "dev": 5, "colab": [5, 6], "wheel": 5, "requir": 5, "alreadi": 5, "satisfi": 5, "dateutil": 5, "pytz": 5, "2020": 5, "2022": 5, "six": 5, "ps": 5, "koneksi": 5, "conn2": 5, "dbname": 5, "user": 5, "bangkalan11": 5, "port": 5, "5432": 5, "operationalerrortraceback": 5, "most": [4, 5, 6, 8], "recent": [4, 5, 6], "call": [4, 5, 6, 8], "last": [4, 5, 6], "e552a8d5dab9": 5, "line": [4, 5, 6, 8, 9, 10], "__init__": [4, 5, 6], "dsn": 5, "connection_factori": 5, "cursor_factori": 5, "kwarg": [4, 5], "120": 5, "121": 5, "_ext": 5, "make_dsn": 5, "122": 5, "conn": 5, "_connect": 5, "kwasync": 5, "123": 5, "124": 5, "operationalerror": 5, "could": 5, "server": 5, "refus": 5, "Is": 5, "run": [5, 6, 9], "accept": [5, 8], "tcp": 5, "ip": 5, "cannot": 5, "assign": 5, "request": 5, "paramet": [5, 6], "your": [5, 8, 9, 10], "differ": [5, 8], "param_d": 5, "def": [4, 5, 6], "params_d": 5, "except": 5, "databaseerror": 5, "error": [4, 5], "sy": 5, "exit": 5, "return": [4, 5, 6], "postgresql_to_datafram": 5, "select_queri": 5, "column_nam": 5, "tranform": 5, "cursor": 5, "execut": [5, 6, 9], "close": [4, 5], "natur": 5, "we": 5, "get": [5, 6, 8, 9], "tuppl": 5, "fetchal": 5, "need": [5, 9], "turn": 5, "varieti": [4, 5], "breast": 6, "cancer": 6, "ag": 6, "mefalsepaus": 6, "tumor": 6, "size": 6, "inv": 6, "falsed": 6, "cap": 6, "deg": 6, "malig": 6, "quad": 6, "irradiat": 6, "class": 6, "40": 6, "49": 6, "premefals": 6, "right": [4, 6], "left_up": 6, "recurr": 6, "event": 6, "59": 6, "ge40": 6, "central": 6, "35": 6, "39": 6, "left": 6, "left_low": 6, "34": 6, "right_up": 6, "rang": [4, 6, 10], "len": [4, 6], "scatter": [4, 6], "color": [6, 10], "red": [4, 6], "circl": 6, "radiu": 6, "alpha": [4, 6], "gca": 6, "add_patch": 6, "axi": [4, 6], "scale": 6, "euclidiandi": 6, "sqrt": 6, "4142135623730951": 6, "naivebayesclassifi": 6, "self": [4, 6], "pass": 6, "trainset": 6, "no_of_class": 6, "max": 6, "function": [6, 8], "calcul": 6, "sampl": [6, 7, 10], "euclidiandist": 6, "xtest": 6, "xtrain": 6, "sum": [4, 6], "power": [6, 7, 8], "main": 6, "done": 6, "There": [6, 10], "step": [4, 6], "perform": 6, "prior": 6, "probabl": 6, "ex": 6, "p": 6, "A": 6, "no_of_elements_of_one_class": 6, "total_no_of_sampl": 6, "margin": 6, "no_of_elements_in_radiu": 6, "likeliyhood": 6, "no_of_elements_of_current_class": 6, "posterior": 6, "note": [6, 8], "do": [6, 8, 10], "clase": 6, "how": [6, 7, 9], "big": 6, "go": [6, 7], "around": 6, "datapoint": 6, "default": [6, 9], "pred": 6, "number": 6, "element": 6, "each": 6, "members_of_class": 6, "counter": 6, "j": 6, "append": 6, "enter": 6, "process": 6, "t": [4, 6, 8, 10], "everi": 6, "prob_of_class": 6, "loop": 6, "through": 6, "no_of_elements_of_that_class": 6, "total_no_of_el": 6, "prior_prob": 6, "same": [6, 8], "collect": 6, "infrom": 6, "well": [6, 7, 10], "inradius_no": 6, "mani": [6, 8, 9], "point": 6, "current": 6, "inradius_no_current_class": 6, "comput": 6, "margin_prob": 6, "likelihood": 6, "current_class": 6, "no_of_elements_in_circle_of_current_class": 6, "posteri": 6, "formula": 6, "theorem": 6, "post_prob": 6, "biggest": 6, "argmax": 6, "y_te": 6, "correct": 6, "100": [4, 6, 10], "googl": 6, "upload": 6, "widget": 6, "avail": 6, "when": [6, 8, 9], "ha": [4, 6], "been": 6, "browser": 6, "session": 6, "enabl": 6, "keyboardinterrupttraceback": 6, "21dc3c638f66": 6, "68": 6, "69": 6, "uploaded_fil": 6, "_upload_fil": 6, "multipl": 6, "70": 6, "map": 6, "origin": 6, "71": 6, "local_filenam": 6, "dict": 6, "151": 6, "152": 6, "first": 6, "result": 6, "alwai": 6, "an": [6, 8], "picker": 6, "complet": 6, "153": 6, "_output": 6, "eval_j": 6, "154": 6, "_file": 6, "_uploadfil": 6, "input_id": 6, "output_id": 6, "155": 6, "output": [6, 9], "_j": 6, "script": 6, "ignore_result": 6, "timeout_sec": 6, "38": 6, "_messag": 6, "read_reply_from_input": 6, "request_id": 6, "41": 6, "42": 6, "message_id": 6, "94": 6, "repli": 6, "_read_next_input_messag": 6, "95": 6, "_not_readi": 6, "isinst": 6, "time": 6, "sleep": 6, "025": 6, "97": 6, "continu": 6, "98": 6, "keyboardinterrupt": 6, "split": 6, "cross_valid": 6, "random_st": 6, "nb": 6, "nb_sk": 6, "sk_pred": 6, "neighbor": 6, "kneighborsclassifi": 6, "272": 6, "tanpa": 6, "dropna": 6, "labelnya": 6, "stratifi": 6, "n_neighbor": 6, "neighbour": 6, "consid": 6, "weight": 6, "uniform": 6, "distanc": 6, "algorithm": 6, "auto": 6, "leaf_siz": 6, "speed": 6, "up": 6, "search": 6, "minkowski": 6, "type": [6, 7], "metric_param": 6, "keyword": 6, "argument": 6, "n_job": 6, "parallel": 6, "job": 6, "kneighborsclassifierkneighborsclassifi": 6, "44": 6, "23750385": 6, "09467243": 6, "score": 6, "7272727272727273": 6, "check": [6, 7, 10], "precis": 6, "recal": 6, "f1": 6, "classification_report": 6, "anoth": 6, "wai": 6, "f": [4, 6], "support": [6, 9], "73": 6, "00": 6, "84": 6, "48": 6, "66": 6, "macro": 6, "avg": 6, "36": 6, "53": 6, "61": 6, "_classif": 6, "1344": 6, "undefinedmetricwarn": 6, "ill": 6, "defin": [4, 6, 9], "being": [6, 8], "zero_divis": 6, "behavior": 6, "_warn_prf": 6, "averag": 6, "modifi": 6, "msg_start": 6, "small": [7, 8], "give": 7, "you": [7, 8, 9, 10], "feel": 7, "content": [7, 8, 9], "structur": [7, 8], "It": [7, 8], "off": [7, 8, 9], "few": 7, "major": 7, "some": [7, 8, 10], "depth": 7, "ani": [4, 7, 9], "particular": 7, "topic": 7, "out": [7, 10], "document": [7, 8, 9, 10], "more": [7, 9, 10], "inform": [7, 9, 10], "bundl": 7, "see": [7, 8, 9, 10], "postgresql": 7, "elephantsql": 7, "mysql": 7, "bi": 7, "dasar": 7, "klasifikasi": 7, "naiv": 7, "bay": 7, "ut": 7, "analisa": 7, "decis": 7, "tree": 7, "weather": 7, "whether": 8, "write": [8, 9], "book": [8, 9, 10], "ipynb": 8, "regular": 8, "md": [8, 9], "ll": 8, "flavor": 8, "help": 8, "syntax": 8, "stand": 8, "markedli": 8, "slight": 8, "variat": 8, "commonmark": 8, "extens": 8, "allow": 8, "sphinx": 8, "ecosystem": 8, "about": [8, 9, 10], "overview": 8, "two": [8, 9], "thei": 8, "kind": 8, "like": [8, 9], "written": [8, 9], "markup": 8, "languag": 8, "both": 8, "serv": 8, "similar": 8, "purpos": 8, "wherea": 8, "span": 8, "specif": 8, "here": [8, 10], "special": 8, "build": 8, "inlin": 8, "refer": 8, "can": [8, 9, 10], "also": [8, 9, 10], "cite": 8, "store": 8, "bibtex": 8, "exampl": [8, 10], "follow": [8, 9], "holdgraf_evidence_2014": 8, "hdhpk14": 8, "moreov": 8, "insert": 8, "bibliographi": 8, "must": 8, "properli": 8, "bib": 8, "christoph": 8, "ramsai": 8, "holdgraf": 8, "wendi": 8, "de": 8, "heer": 8, "brian": 8, "n": [4, 8, 10], "paslei": 8, "robert": 8, "knight": 8, "evid": 8, "code": [8, 9], "human": 8, "auditori": 8, "cortex": 8, "confer": 8, "cognit": 8, "neurosci": 8, "brisban": 8, "australia": 8, "2014": 8, "frontier": 8, "starter": 8, "lot": [8, 10], "jupyterbook": 8, "let": 9, "detail": 9, "instruct": 9, "With": 9, "direct": 9, "so": 9, "built": 9, "block": 9, "kernel": 9, "rest": 9, "jupytext": 9, "thing": 9, "understand": 9, "includ": [9, 10], "top": 9, "presenc": 9, "That": 9, "If": 9, "d": 9, "treat": 9, "command": 9, "init": 9, "path": 9, "markdownfil": 9, "mean": [4, 10], "As": 10, "emb": 10, "etc": 10, "add_": 10, "math": 10, "begin": 10, "align": [4, 10], "mbox": 10, "la_": 10, "tex": 10, "end": 10, "But": 10, "make": [4, 10], "sure": 10, "escap": 10, "dollar": 10, "sign": 10, "want": 10, "keep": 10, "work": 10, "guid": 10, "rcparam": 10, "cycler": 10, "ion": 10, "contextlib": 10, "exitstack": 10, "0x7f2306a985b0": 10, "fix": 10, "random": 10, "state": 10, "reproduc": 10, "seed": 10, "19680801": 10, "logspac": 10, "randn": 10, "ii": 10, "cmap": 10, "coolwarm": 10, "ax": 10, "prop_cycl": 10, "linspac": 10, "line2d": 10, "custom_lin": 10, "lw": 10, "fig": 10, "subplot": [4, 10], "figsiz": [4, 10], "plot": 10, "legend": [4, 10], "cold": 10, "medium": 10, "interact": 10, "seaborn": 4, "sn": 4, "sep": 4, "filenotfounderrortraceback": 4, "428b89ba37cb": 4, "util": 4, "_decor": 4, "wrapper": 4, "arg": 4, "209": 4, "els": 4, "210": 4, "new_arg_nam": 4, "new_arg_valu": 4, "211": 4, "func": 4, "212": 4, "213": 4, "cast": 4, "329": 4, "stacklevel": 4, "find_stack_level": 4, "330": 4, "331": 4, "332": 4, "333": 4, "callabl": 4, "vararg": 4, "io": 4, "parser": 4, "reader": 4, "filepath_or_buff": 4, "delimit": 4, "header": 4, "index_col": 4, "usecol": 4, "squeez": 4, "prefix": 4, "mangle_dupe_col": 4, "engin": 4, "true_valu": 4, "false_valu": 4, "skipinitialspac": 4, "skiprow": 4, "skipfoot": 4, "nrow": 4, "na_valu": 4, "keep_default_na": 4, "na_filt": 4, "verbos": 4, "skip_blank_lin": 4, "parse_d": 4, "infer_datetime_format": 4, "keep_date_col": 4, "date_pars": 4, "dayfirst": 4, "cache_d": 4, "iter": 4, "chunksiz": 4, "compress": 4, "thousand": 4, "decim": 4, "linetermin": 4, "quotechar": 4, "quot": 4, "doublequot": 4, "escapechar": 4, "comment": 4, "encod": 4, "encoding_error": 4, "dialect": 4, "error_bad_lin": 4, "warn_bad_lin": 4, "on_bad_lin": 4, "delim_whitespac": 4, "low_memori": 4, "memory_map": 4, "float_precis": 4, "storage_opt": 4, "948": 4, "kwd": 4, "updat": 4, "kwds_default": 4, "949": 4, "950": 4, "_read": 4, "951": 4, "952": 4, "603": 4, "604": 4, "605": 4, "textfileread": 4, "606": 4, "607": 4, "1440": 4, "1441": 4, "handl": 4, "iohandl": 4, "1442": 4, "_engin": 4, "_make_engin": 4, "1443": 4, "1444": 4, "1733": 4, "b": 4, "mode": 4, "1734": 4, "1735": 4, "get_handl": 4, "1736": 4, "1737": 4, "common": 4, "path_or_buf": 4, "is_text": 4, "854": 4, "ioarg": 4, "855": 4, "856": 4, "open": 4, "857": 4, "858": 4, "filenotfounderror": 4, "errno": 4, "directori": 4, "value_count": 4, "int64": 4, "sepal": 4, "length": 4, "width": 4, "petal": 4, "label_dict": 4, "feature_dict": 4, "style": 4, "context": 4, "whitegrid": 4, "figur": 4, "lab": 4, "hist": 4, "bin": 4, "xlabel": 4, "loc": 4, "upper": 4, "fancybox": 4, "fontsiz": 4, "tight_layout": 4, "x_std": 4, "nameerror": 4, "traceback": 4, "afc6288d8b52": 4, "mean_vec": 4, "cov_mat": 4, "covari": 4, "matrix": 4, "00671141": 4, "11835884": 4, "87760447": 4, "82343066": 4, "43131554": 4, "36858315": 4, "96932762": 4, "cov": 4, "eig_val": 4, "eig_vec": 4, "linalg": 4, "eig": 4, "eigenvector": 4, "eigenvelu": 4, "52106591": 4, "37741762": 4, "71956635": 4, "26128628": 4, "26934744": 4, "92329566": 4, "24438178": 4, "12350962": 4, "5804131": 4, "02449161": 4, "14212637": 4, "80144925": 4, "56485654": 4, "06694199": 4, "63427274": 4, "52359713": 4, "93808505": 4, "9201649": 4, "14774182": 4, "02085386": 4, "corr_mat1": 4, "corrcoef": 4, "91849782": 4, "91403047": 4, "14675688": 4, "02071484": 4, "cor_mat2": 4, "u": 4, "v": 4, "svd": 4, "ev": 4, "assert_array_almost_equ": 4, "norm": 4, "everith": 4, "eigenvalu": 4, "tupl": 4, "eig_pair": 4, "ab": 4, "sort": 4, "kei": 4, "lambda": 4, "revers": 4, "correctli": 4, "decreas": 4, "descend": 4, "order": 4, "9184978165319952": 4, "9140304714680695": 4, "1467568755713151": 4, "020714836428618984": 4, "tot": 4, "var_exp": 4, "cum_var_exp": 4, "cumsum": 4, "bar": 4, "center": 4, "individu": 4, "explain": 4, "varianc": 4, "where": 4, "mid": 4, "cumul": 4, "ylabel": 4, "ratio": 4, "princip": 4, "compon": 4, "best": 4, "matrix_w": 4, "hstack": 4, "reshap": 4, "w": 4, "col": 4, "zip": 4, "blue": 4, "green": 4, "c": 4, "lower": 4, "decomposit": 4, "pca": 4, "sklearnpca": 4, "sklearn_pca": 4, "n_compon": 4, "y_sklearn": 4}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"pendatab": 0, "decis": 1, "tree": 1, "classifi": 1, "data": [1, 2, 5, 6], "weather": 1, "classif": 1, "python": 1, "langkah": 2, "mengimpor": [2, 5], "iri": [2, 5], "ke": [2, 5], "elephantsql": 2, "postgresql": [2, 5], "mysql": 2, "dan": 2, "power": 2, "bi": 2, "membuat": 2, "akun": 2, "di": 2, "koneksi": 2, "import": 2, "github": 2, "server": 2, "lokal": 2, "meng": 2, "export": 2, "dari": 2, "csv": 2, "phpmyadmin": 2, "excel": 2, "databas": 2, "dasar": 3, "pembelajaran": 3, "mesin": 3, "klasifikasi": [3, 6], "naiv": [3, 6], "bay": [3, 6], "ut": 6, "analisa": 6, "knn": 6, "welcom": 7, "your": 7, "jupyt": 7, "book": 7, "markdown": [8, 9, 10], "file": 8, "what": 8, "myst": [8, 9, 10], "sampl": 8, "role": 8, "direct": 8, "citat": 8, "learn": 8, "more": 8, "notebook": [9, 10], "an": 9, "exampl": 9, "cell": 9, "creat": 9, "quickli": 9, "add": 9, "yaml": 9, "metadata": 9, "content": 10, "code": 10, "block": 10, "output": 10}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})