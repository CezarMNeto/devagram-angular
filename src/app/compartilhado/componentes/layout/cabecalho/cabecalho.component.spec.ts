<header class="cabecalhoPrincipal">
    <div class="conteudoCabecalhoPrincipal">
        <div class="logoCabecalho">
            <img
                src="assets/imagens/logoHorizontal.svg"
                alt="Logo Horizontal"
                (click)="irParaHome()"
            />
        </div>

        <div class="barraPesquisa">
            <div class="iconePesquisa">
                <img
                    src="assets/imagens/lupa.svg"
                    alt="Icone lupa"
                />
            </div>

            <input
                type="text"
                placeholder="Pesquisar"
                [(ngModel)]="termoPesquisado"
                (keyup)="pesquisarUsuarios()"
            />
        </div>

        <app-navegacao class="desktop"></app-navegacao>
    </div>

    <div class="containerResultadoPesquisa" *ngIf="resultadoDaPesquisa.length">
        <div
            *ngFor="let usuario of resultadoDaPesquisa"
            class="resultado"
            (click)="irParaOPerfilDoUsuario(usuario._id)"
        >
            <app-avatar [src]="usuario.avatar"></app-avatar>
            <div class="informacoesUsuario">
                <strong>{{ usuario.nome }}</strong>
                <span>{{ usuario.email }}</span>
            </div>
        </div>
    </div>
</header>
