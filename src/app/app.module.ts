import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
///
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';

import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PublicInfoComponent } from './components/public-info/public-info.component';
import { PostsInsidePageComponent } from './components/insidePages/posts-inside-page/posts-inside-page.component';
import { ProductsInsidePageComponent } from './components/insidePages/products-inside-page/products-inside-page.component';
import { GoalsComponent } from './components/aboutComponents/goals/goals.component';
import { ManagementComponent } from './components/aboutComponents/management/management.component';
import { DepartmentsComponent } from './components/aboutComponents/departments/departments.component';
import { StructureComponent } from './components/aboutComponents/structure/structure.component';
import { VacanciesComponent } from './components/aboutComponents/vacancies/vacancies.component';
import { VacanciesFirstComponent } from './components/aboutComponents/vacancies-first/vacancies-first.component';
import { VacanciesSecondComponent } from './components/aboutComponents/vacancies-second/vacancies-second.component';
import { VacanciesThirdComponent } from './components/aboutComponents/vacancies-third/vacancies-third.component';
import { VacanciesFourthComponent } from './components/aboutComponents/vacancies-fourth/vacancies-fourth.component';
import { LegalActsComponent } from './components/aboutComponents/legal-acts/legal-acts.component';
import { LegalActsFisrtComponent } from './components/aboutComponents/legal-acts-fisrt/legal-acts-fisrt.component';
import { LegalActsSecondComponent } from './components/aboutComponents/legal-acts-second/legal-acts-second.component';
import { LegalActsThirdComponent } from './components/aboutComponents/legal-acts-third/legal-acts-third.component';
import { LegalActsFourthComponent } from './components/aboutComponents/legal-acts-fourth/legal-acts-fourth.component';
import { LegalActsFifthComponent } from './components/aboutComponents/legal-acts-fifth/legal-acts-fifth.component';
import { FAQComponent } from './components/aboutComponents/faq/faq.component';
import { GeneralEducationComponent } from './components/productsComponents/general-education/general-education.component';
import { PreschoolEducationComponent } from './components/productsComponents/preschool-education/preschool-education.component';
import { ProfessionalEducationComponent } from './components/productsComponents/professional-education/professional-education.component';
import { HigherEducationComponent } from './components/productsComponents/higher-education/higher-education.component';
import { OtherComponent } from './components/productsComponents/other/other.component';
import { ServiceGeneralEducationComponent } from './components/serviceComponents/service-general-education/service-general-education.component';
import { ServiceHigherEducationComponent } from './components/serviceComponents/service-higher-education/service-higher-education.component';
import { ServicePreschoolEducationComponent } from './components/serviceComponents/service-preschool-education/service-preschool-education.component';
import { ServiceProfessionalEducationComponent } from './components/serviceComponents/service-professional-education/service-professional-education.component';
import { ServiceOtherComponent } from './components/serviceComponents/service-other/service-other.component';
import { ProductsServiceInsidePageComponent } from './components/insidePages/products-service-inside-page/products-service-inside-page.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { PublicFirstComponent } from './components/publicInfoPages/public-first/public-first.component';
import { PublicSecondComponent } from './components/publicInfoPages/public-second/public-second.component';
import { PublicThirdComponent } from './components/publicInfoPages/public-third/public-third.component';
import { PublicFourthComponent } from './components/publicInfoPages/public-fourth/public-fourth.component';
///
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ErrorComponent,
    HomeComponent,
    PostsComponent,
    PublicInfoComponent,
    PostsInsidePageComponent,
    ProductsInsidePageComponent,
    GoalsComponent,
    ManagementComponent,
    DepartmentsComponent,
    StructureComponent,
    VacanciesComponent,
    VacanciesFirstComponent,
    VacanciesSecondComponent,
    VacanciesThirdComponent,
    VacanciesFourthComponent,
    LegalActsComponent,
    LegalActsFisrtComponent,
    LegalActsSecondComponent,
    LegalActsThirdComponent,
    LegalActsFourthComponent,
    LegalActsFifthComponent,
    FAQComponent,
    GeneralEducationComponent,
    PreschoolEducationComponent,
    ProfessionalEducationComponent,
    HigherEducationComponent,
    OtherComponent,
    ServiceGeneralEducationComponent,
    ServiceHigherEducationComponent,
    ServicePreschoolEducationComponent,
    ServiceProfessionalEducationComponent,
    ServiceOtherComponent,
    ProductsServiceInsidePageComponent,
    AuthComponent,
    RegistrationComponent,
    PublicFirstComponent,
    PublicSecondComponent,
    PublicThirdComponent,
    PublicFourthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //
    HttpClientModule,
    FormsModule 
    //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
