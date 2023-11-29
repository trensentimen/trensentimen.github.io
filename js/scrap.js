const scrapData = () => {
    if(!confirm("Apakah anda yakin ingin mengambil data?"))
    {
        return;
    }
    showLoadingModal()
    alert("Berhasil mengambil data")
    document.getElementById("actionButton").innerHTML = "Analyze Data";
    document.getElementById("actionButton").setAttribute("onclick", "analyzeData()");
    document.getElementById("actionButton").setAttribute("class", "button is-primary");
}

const responseData = (result) => {}

window.scrapData = scrapData;