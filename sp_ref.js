function Species(genus,sp_epithet,intra_sp_arr=null,author='',etc=''){
    // 일반명, 속명, 종소명 설정
    this.genus = genus.replaceAll(' ','').toLowerCase();
    this.genus = this.genus.charAt(0).toUpperCase() + this.genus.slice(1);
    this.sp_epithet = sp_epithet.replaceAll(' ','').toLowerCase();
    this.scientific = this.genus + ' ' + this.sp_epithet; // 학명


    // 종 내 분류 설정
    this.subsp = null;
    this.var = null;
    this.for = null;

    for(let i in intra_sp_arr){
        item = intra_sp_arr[i];
        switch(item[0]){
            case 'subsp':
                this.subsp = item[1];
                this.scientific = this.scientific + ' subsp. ' + this.subsp;
                break;
            case 'var':
                this.var = item[1];
                this.scientific = this.scientific + ' var. ' + this.var;
                break;
            case 'for':
                this.for = item[1];
                this.scientific = this.scientific + ' for. ' + this.for;
                break;
            default:
                continue;
        }
    }

    // 명명자, 기타 정보 설정
    this.author = author.trim();
    this.etc = etc.trim();
    this.scientific = this.scientific + ' ' + this.author;
}

// 국명-학명 배열
// ['국명','Genus','sp_epithet',['subsp/var/for','name'],'author','etc']
const name_ref_arr = [['돼지풀아재비','Parthenium','hysterophorus',null,'L.',''],
    ['벳지','Vicia','villosa',null,'Roth.','']];

// {국명:학명} 객체(dictionary)
let name_ref_obj = {};
for(let i in name_ref_arr){
    let item = name_ref_arr[i];
    name_ref_obj[item[0]] = new Species(item[1],item[2],item[3],item[4],item[5]);
}
