import {
  Compiler,
  Component,
  Injector,
  NgModuleFactory, NgModuleRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

export const lazyModule = {
  newsModule: {
    loadChildren:  () => import('./news/news.module').then(m => m.NewsModule)
  }
};

@Component({
  selector: 'app-news-loader',
  template: '<div #container></div>'
})

export class NewsLoaderComponent implements OnInit {

  @ViewChild('container', {static: true, read: ViewContainerRef}) container: ViewContainerRef;

  private lazyModuleRef: NgModuleRef<any>;

  constructor(private inj: Injector, private compiler: Compiler) {
  }


  ngOnInit() {

    const lazyModuleInjector = Injector.create({
      providers: [],
      parent: this.inj,
      name: 'lazyModuleProviders'
    });

    lazyModule.newsModule.loadChildren().then(moduleOrFactory => {
      if (moduleOrFactory instanceof NgModuleFactory) {
        return moduleOrFactory;
      } else {
        return this.compiler.compileModuleAsync(moduleOrFactory);
      }
    }).then((factory: NgModuleFactory<any>) => {
      this.lazyModuleRef = factory.create(lazyModuleInjector);
      const entryComponent = ( factory.moduleType as any).entry;
      const moduleRef = factory.create(this.inj);

      const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);

      this.container.createComponent(compFactory);
    });
  }
}
