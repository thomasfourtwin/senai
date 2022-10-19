function TrocarTema(tema)
{
    document.body.classList.remove('azul');
    document.body.classList.remove('verde');
    document.body.classList.remove('vermelho');
    document.body.classList.remove('inicial');
    document.body.classList.add(tema);
}