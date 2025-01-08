import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

///       ALL-COMPONENTS      ///
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PublicInfoComponent } from './components/public-info/public-info.component';
import { PostsInsidePageComponent } from './components/insidePages/posts-inside-page/posts-inside-page.component';
import { ProductsInsidePageComponent } from './components/insidePages/products-inside-page/products-inside-page.component';
import { ProductsServiceInsidePageComponent } from './components/insidePages/products-service-inside-page/products-service-inside-page.component';
/// ABOUT-PAGES (nav-bar-first-dropdown) COMPONENTS ///
import { GoalsComponent } from './components/aboutComponents/goals/goals.component';
import { ManagementComponent } from './components/aboutComponents/management/management.component';
import { StructureComponent } from './components/aboutComponents/structure/structure.component';
import { DepartmentsComponent } from './components/aboutComponents/departments/departments.component';
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
/// ABOUT-PAGES (nav-bar-first-dropdown) COMPONENTS ///
/// PRODUCT-PAGES (nav-bar-second-dropdown) COMPONENTS ///
import { GeneralEducationComponent } from './components/productsComponents/general-education/general-education.component';
import { HigherEducationComponent } from './components/productsComponents/higher-education/higher-education.component';
import { PreschoolEducationComponent } from './components/productsComponents/preschool-education/preschool-education.component';
import { ProfessionalEducationComponent } from './components/productsComponents/professional-education/professional-education.component';
import { OtherComponent } from './components/productsComponents/other/other.component';
/// PRODUCT-PAGES (nav-bar-second-dropdown) COMPONENTS ///
/// SERVICE-PAGES (nav-bar-third-dropdown) COMPONENTS ///
import { ServiceGeneralEducationComponent } from './components/serviceComponents/service-general-education/service-general-education.component';
import { ServiceHigherEducationComponent } from './components/serviceComponents/service-higher-education/service-higher-education.component';
import { ServiceOtherComponent } from './components/serviceComponents/service-other/service-other.component';
import { ServicePreschoolEducationComponent } from './components/serviceComponents/service-preschool-education/service-preschool-education.component';
import { ServiceProfessionalEducationComponent } from './components/serviceComponents/service-professional-education/service-professional-education.component';
/// SERVICE-PAGES (nav-bar-third-dropdown) COMPONENTS ///
/// PUBLIC-INFO PAGES COMPONENTS ///
import { PublicFirstComponent } from './components/publicInfoPages/public-first/public-first.component';
import { PublicSecondComponent } from './components/publicInfoPages/public-second/public-second.component';
import { PublicThirdComponent } from './components/publicInfoPages/public-third/public-third.component';
import { PublicFourthComponent } from './components/publicInfoPages/public-fourth/public-fourth.component';

/// PUBLIC-INFO PAGES COMPONENTS ///
import { AuthComponent } from './components/auth/auth.component';
import { RegistrationComponent } from './components/registration/registration.component';
///       ALL-COMPONENTS      ///
let routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "posts",
    component: PostsComponent
  },
  {
    path: "post-details/:id",
    component: PostsInsidePageComponent
  },
  {
    path: "product-details/:id",  
    component: ProductsInsidePageComponent
  },
  {
    path: "products-service-inside-page/:id",  
    component: ProductsServiceInsidePageComponent
  },
  /// NVA-BAR ABOUT - COMPONENTS ///
  {
    path: "goals",  
    component: GoalsComponent
  },
  {
    path: "management",  
    component: ManagementComponent
  },
  {
    path: "departments",  
    component: DepartmentsComponent
  },
  {
    path: "structure",  
    component: StructureComponent
  },
  // VACANCIES //
  {
    path: "vacancies",  
    component: VacanciesComponent
  },
  {
    path: "vacancies/18",  
    component: VacanciesFirstComponent
  },
  {
    path: "vacancies/17",  
    component: VacanciesSecondComponent
  },
  {
    path: "vacancies/16",  
    component: VacanciesThirdComponent
  },
  {
    path: "vacancies/15",  
    component: VacanciesFourthComponent
  },
   // VACANCIES //
  /// LEGAL-ACTS ///
  {
    path: "legalActs",
    component: LegalActsComponent
  },
  {
    path: "legalActs/2023",
    component: LegalActsFisrtComponent
  },
  {
    path: "legalActs/2022",
    component: LegalActsSecondComponent
  },
  {
    path: "legalActs/2021",
    component: LegalActsThirdComponent 
  },
  {
    path: "legalActs/2020",
    component: LegalActsFourthComponent 
  },
  {
    path: "legalActs/2019",
    component: LegalActsFifthComponent 
  },
    /// LEGAL-ACTS ///
  {
    path: "faq",
    component: FAQComponent
  },
/// NAV-BAR-PRODUCTS-COMPONENTS ///
  {
    path: "projects/7",
    component: OtherComponent
  },
  {
    path: "projects/10",
    component: HigherEducationComponent
  },
  {
    path: "projects/3",
    component: ProfessionalEducationComponent
  },
  {
    path: "projects/9",
    component: GeneralEducationComponent
  },
  {
    path: "projects/1",
    component: PreschoolEducationComponent
  },
/// NAV-BAR-PRODUCTS-COMPONENTS ///
/// NAV-BAR-SERVICE-COMPONENTS ///
   {
    path: "services/9",
    component: ServiceGeneralEducationComponent
   },
   {
    path: "services/1",
    component: ServicePreschoolEducationComponent
   },
   {
    path: "services/3",
    component: ServiceProfessionalEducationComponent
   },
   {
    path: "services/10",
    component: ServiceHigherEducationComponent
   },
   {
    path: "services/7",
    component: ServiceOtherComponent
   },
/// NAV-BAR-SERVICE-COMPONENTS ///
    {
    path: "auth",
    component: AuthComponent
    },
    {
      path: "registration",
      component: RegistrationComponent
      },
      /// PUBLIC INFO PAGES ///
      {
        path: "public-info",
        component: PublicInfoComponent
      },
      {
        path: "public-info/year-2023",
        component: PublicFirstComponent
      },
      {
        path: "public-info/year-2022",
        component: PublicSecondComponent
      },
      {
        path: "public-info/year-2021",
        component: PublicThirdComponent
      },
      {
        path: "public-info/year-2020",
        component: PublicFourthComponent
      },
      /// PUBLIC INFO PAGES ///
  {
    path: "**",
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
