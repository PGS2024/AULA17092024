function exibir() {
    for (var x=1; x<=6 ; x++)
        document.write("<h"+x+">OI, sou o H"+x+"</h"+x+">");
    exibir()
}
exibir()