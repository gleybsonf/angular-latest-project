import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../ui/button/button.component';

export interface MenuItem {
  id: string; // identificador único, pode ser usado para controle de acesso
  label: string;
  path: string;
  roles?: string[]; // opcional, para controle de acesso baseado em funções
  expanded?: boolean; // opcional, para itens com submenus
  icon?: string; // opcional, para ícones de menu
  active?: boolean; // opcional, para indicar se o item está ativo,
  canView?: boolean; // opcional, para controle de acesso
  children?: MenuItem[]; // opcional, para submenus
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ButtonComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  //private authFacade = inject(AuthFacade);
  //user = this.authFacade.currentUser; // Signal do usuário logado

  //deve ser lido do arquivo de rotas para evitar hardcoding
  protected routesPaths: MenuItem[] = [];
  protected isCollapsed: boolean = false;

  constructor() {
    this.routesPaths = [
      {
        id: 'dashboard',
        label: 'Cadastros',
        path: 'dashboard',
        active: true,
        children: [
          { id: 'people', label: 'Pessoas', path: 'people' },
          { id: 'vehicles', label: 'Veículos', path: 'vehicles' },
          { id: 'users', label: 'Usuários', path: 'users' },
        ],
      },
      { id: 'reports', label: 'Relatórios', path: 'reports' },
      { id: 'settings', label: 'Configurações', path: 'settings' },
      { id: 'maps', label: 'Mapas', path: 'maps' },
      { id: 'logs', label: 'Logs', path: 'logs' },
      { id: 'public-data', label: 'Dados Públicos', path: 'public-data' },
      {
        id: 'data-structures',
        label: 'Estruturas de Dados',
        path: 'data-structures',
        children: [
          { id: 'stacks', label: 'Pilhas', path: 'stacks' },
          { id: 'queues', label: 'Filas', path: 'queues' },
          { id: 'linked-lists', label: 'Listas Ligadas', path: 'linked-lists' },
          { id: 'trees', label: 'Árvores', path: 'trees' },
        ],
      },
      { id: 'ai', label: 'Inteligência Artificial', path: 'ai' },
    ];
  }

  protected toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  protected toggle(item: MenuItem): void {
    item.expanded = !item.expanded;
  }

  protected logout(): void {
    //this.authFacade.logout();
  }
}
