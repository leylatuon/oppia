// Copyright 2021 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview Module for the blog-dashboard page.
 */

import { APP_INITIALIZER, NgModule, StaticProvider, DoBootstrap} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { downgradeComponent } from '@angular/upgrade/static';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { RequestInterceptor } from 'services/request-interceptor.service';
import { SharedComponentsModule } from 'components/shared-component.module';

import { OppiaAngularRootComponent } from 'components/oppia-angular-root.component';
import { BlogDashboardPageComponent } from 'pages/blog-dashboard-page/blog-dashboard-page.component';
import { BlogPostActionConfirmationModalComponent } from 'pages/blog-dashboard-page/blog-post-action-confirmation/blog-post-action-confirmation.component';
import { BlogCardComponent } from 'pages/blog-dashboard-page/blog-card/blog-card.component';
import { BlogDashboardTileComponent } from 'pages/blog-dashboard-page/blog-dashboard-tile/blog-dashboard-tile.component';
import { BlogDashboardNavbarBreadcrumbComponent } from 'pages/blog-dashboard-page/navbar/navbar-breadcrumb/blog-dashboard-navbar-breadcrumb.component';
import { platformFeatureInitFactory, PlatformFeatureService } from 'services/platform-feature.service';
import { BlogPostEditorComponent } from 'pages/blog-dashboard-page/blog-post-editor/blog-post-editor.component';
import { UploadBlogPostThumbnailModalComponent } from 'pages/blog-dashboard-page/modal-templates/upload-blog-post-thumbnail-modal.component';
import { BlogCardPreviewModalComponent } from 'pages/blog-dashboard-page/modal-templates/blog-card-preview-modal.component';
import { UploadBlogPostThumbnailComponent } from 'pages/blog-dashboard-page/modal-templates/upload-blog-post-thumbnail.component';
import { BlogPostEditorNavbarPreLogoActionComponent } from 'pages/blog-dashboard-page/navbar/navbar-pre-logo-action/blog-post-editor-pre-logo-action.component';
declare var angular: ng.IAngularStatic;

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedComponentsModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonToggleModule,
    BrowserAnimationsModule
  ],
  declarations: [
    BlogDashboardNavbarBreadcrumbComponent,
    BlogDashboardPageComponent,
    BlogCardComponent,
    BlogDashboardTileComponent,
    BlogPostEditorComponent,
    BlogPostActionConfirmationModalComponent,
    UploadBlogPostThumbnailModalComponent,
    BlogCardPreviewModalComponent,
    UploadBlogPostThumbnailComponent,
    BlogPostEditorNavbarPreLogoActionComponent
  ],
  entryComponents: [
    BlogDashboardNavbarBreadcrumbComponent,
    BlogDashboardPageComponent,
    BlogCardComponent,
    BlogDashboardTileComponent,
    BlogPostEditorComponent,
    BlogPostActionConfirmationModalComponent,
    UploadBlogPostThumbnailModalComponent,
    BlogCardPreviewModalComponent,
    UploadBlogPostThumbnailComponent,
    BlogPostEditorNavbarPreLogoActionComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: platformFeatureInitFactory,
      deps: [PlatformFeatureService],
      multi: true,
    },
  ],
})
class BlogDashboardPageModule implements DoBootstrap {
  ngDoBootstrap() {}
}

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { downgradeModule } from '@angular/upgrade/static';

const bootstrapFnAsync = async(extraProviders: StaticProvider[]) => {
  const platformRef = platformBrowserDynamic(extraProviders);
  return platformRef.bootstrapModule(BlogDashboardPageModule);
};
const downgradedModule = downgradeModule(bootstrapFnAsync);

declare var angular: ng.IAngularStatic;

angular.module('oppia').requires.push(downgradedModule);

angular.module('oppia').directive(
  // This directive is the downgraded version of the Angular component to
  // bootstrap the Angular 8.
  'oppiaAngularRoot',
  downgradeComponent({
    component: OppiaAngularRootComponent
  }) as angular.IDirectiveFactory);
