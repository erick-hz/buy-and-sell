import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/listings', pathMatch: 'full' },
  { path: 'listings', component: ListingPageComponent, pathMatch: 'full' },
  { path: 'listings/:id', component: ListingDetailPageComponent, pathMatch: 'full' },
  { path: 'contact/:id', component: ContactPageComponent, pathMatch: 'full' },
  { path: 'edit-listing', component: EditListingPageComponent, pathMatch: 'full' },
  { path: 'my-listings', component: MyListingsPageComponent, pathMatch: 'full' },
  { path: 'new-listing', component: NewListingPageComponent, pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
