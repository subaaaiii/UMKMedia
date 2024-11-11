import { Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Komunitas from "../pages/komunitas/Komunitas";
import Protection from "./Protection";
import Artikel from "../pages/artikel/Artikel";
// import OneArtikel from "../pages/artikel/one-artikel/OneArtikel";
import MainSection from "../components/artikel/main-section/MainSection";
import DetailArtikel from "../pages/detail-artikel/DetailArtikel";
import KelasBisnis from "../pages/kelas-bisnis/KelasBisnis";
import DetailKelasBisnis from "../pages/detail-kelas-bisnis/DetailKelasBisnis";
import Login from "../pages/login/Login";

import Register from "../pages/register/Register";
import Profile from "../pages/profile/Profile";
import DashboardProfile from "../components/profile/dashboard-profile/dashboardProfile";
import KelasSaya from "../components/profile/kelas-saya/KelasSaya";
import SemuaKelasSection from "./../components/profile/kelas-saya/semua-kelas-section/SemuaKelasSection";
import SedangDipelajariSection from "./../components/profile/kelas-saya/sedang-dipelajari-section/SedangDipelajariSection";
import BelumDimulaiSection from "./../components/profile/kelas-saya/belum-dimulai-section/BelumDimulaiSection";
import SelesaiSection from "./../components/profile/kelas-saya/selesai-section/SelesaiSection";
import Event from "./../components/profile/event/Event";
import Wishlist from "./../components/profile/wishlist/Wishlist";
import Transaksi from "./../components/profile/transaksi/Transaksi";
import TentangKami from "../pages/tentang-kami/TentangKami";
import Career from "../pages/career/Career";
import CareerLowongan from "../pages/career-lowongan/CareerLowongan";
import OneCareerLowongan from "../pages/career-lowongan/one-career-lowongan/OneCareerLowongan";
import DetailProfile from "../pages/detail-profile/DetailProfile";
import UbahProfile from "../pages/ubah-profile/UbahProfile";
import SemuaTransaksi from "../components/profile/transaksi/semua-transaksi/SemuaTransaksi";
import TransaksiBerhasil from "./../components/profile/transaksi/transaksi-berhasil/TransaksiBerhasil";
import TransaksiMenunggu from "../components/profile/transaksi/transaksi-menunggu/TransaksiMenunggu";
import TransaksiDibatalkan from "./../components/profile/transaksi/transaksi-dibatalkan/TransaksiDibatalkan";
// import LihatInvoice from "../components/profile/transaksi/lihat-invoice/LihatInvoice";
import Invoice from "./../pages/invoice/Invoice";
import Checkout from "../pages/checkout/Checkout";
import Approval from "../pages/checkout-approval/Approval";
import Success from "../pages/success-checkout/Success";
import FreeCheckout from "../pages/checkout-free/FreeCheckout";

import ChangePassword from "../pages/change-password/ChangePassword";
import InfoLain from "../pages/info-lain/InfoLain";
import TentangKelas from "../pages/tentang-kelas/TentangKelas";
import LmsKelas from "../pages/lms-kelas/LmsKelas";
import Verifikasi from "../pages/verifikasi/Verifikasi";
import ResetPassword from "../pages/reset-password/ResetPassword";
import RequestReset from "../pages/request-reset/RequestReset";
import AdminKelasBisnis from "../pages/admin-kelas-bisnis/AdminKelasBisnis";
import KelasBisnisForm from "../pages/admin-kelas-bisnis/KelasBisnisForm";
import AdminArtikel from "../pages/admin-artikel/AdminArtikel";
import ArtikelForm from "../pages/admin-artikel/ArtikelForm";
import AdminDashboard from "../pages/admin-dashboard/AdminDashboard";
import DashboardUMKM from "../pages/admin-dashboard/DashboardUMKM";
import DashboardTestimoni from "../pages/admin-dashboard/DashboardTestimoni";
import DashboardFAQ from "../pages/admin-dashboard/DashboardFAQ";
import DashboardPartner from "../pages/admin-dashboard/DashboardPartner";
import UMKMForm from "../pages/admin-dashboard/UMKMForm";
import TestimoniForm from "../pages/admin-dashboard/TestimoniForm";
import FAQForm from "../pages/admin-dashboard/FAQForm";
import PartnerForm from "../pages/admin-dashboard/PartnerForm";
import Layanan from "../pages/layanan/Layanan";
import KonsultasiBisnis from "../pages/konsultasi-bisnis/KonsultasiBisnis";
import KonsultasiBisnisDeskripsi from "../pages/konsultasi-bisnis-deskripsi/KonsultasiBisnisDeskripsi";
import LoginCMS from "../pages/cms/login/LoginCMS";
import Authentication from "./Authentication";
import Protect from "./Protect";
import RestrictPage from "./RestrictPage";
import ListAdmin from "../pages/admin-list-admin/ListAdmin";
import FormAdmin from "../pages/admin-list-admin/FormAdmin";
import EditAdmin from "../pages/admin-list-admin/EditAdmin";

const routes = [
  <Route
    key="home"
    path="/"
    element={
      <Protection publicSide={true} userOnly={true}>
        <Home />
      </Protection>
    }
  />,
  <Route
    key="artikel"
    path="/artikel/:page"
    element={
      <Protection publicSide={true} userOnly={true}>
        <Artikel />
      </Protection>
    }
  >
    <Route index element={<MainSection />} />
    <Route path=":kategori" element={<MainSection />} />
  </Route>,
  <Route
    key="detail-artikel"
    path="/detail-artikel/:kategori/:id/:title"
    element={
      <Protection publicSide={true} userOnly={true}>
        <DetailArtikel />
      </Protection>
    }
  />,
  <Route
    key="komunitas-konten-kreator"
    path="/komunitas/:title"
    element={
      <Protection publicSide={true} userOnly={true}>
        <Komunitas />
      </Protection>
    }
  />,
  <Route
    key="komunitas-bisnis"
    path="/komunitas/:title"
    element={
      <Protection publicSide={true} userOnly={true}>
        <Komunitas />
      </Protection>
    }
  />,
  <Route
    key="kelas-bisnis"
    path="/kelas-bisnis"
    element={
      <Protection publicSide={true} userOnly={true}>
        <KelasBisnis />
      </Protection>
    }
  />,
  <Route
    key="kelas-bisnis"
    path="/kelas-bisnis/:id"
    element={
      <Protection publicSide={true} userOnly={true}>
        <DetailKelasBisnis />
      </Protection>
    }
  />,
  <Route
    key="login"
    path="/login"
    element={
      <Protection publicSide={true}>
        <Login />
      </Protection>
    }
  />,
  <Route
    key="register"
    path="/register"
    element={
      <Protection publicSide={true}>
        <Register />
      </Protection>
    }
  />,

  <Route
    path="/cms/login"
    element={
      <Authentication>
        <LoginCMS />
      </Authentication>
    }
  />,

  <Route
    key="career"
    path="/career"
    element={
      <Protection publicSide={true} userOnly={true}>
        <Career />
      </Protection>
    }
  />,

  <Route
    key="careerLowongan"
    path="/career-lowongan"
    element={
      <Protection publicSide={true} userOnly={true}>
        <CareerLowongan />
      </Protection>
    }
  />,

  <Route
    key="careerLowongan"
    path="/career-lowongan/:id_lowongan"
    element={
      <Protection publicSide={true} userOnly={true}>
        <OneCareerLowongan />
      </Protection>
    }
  />,

  <Route
    key="kelas-bisnis"
    path="/kelas-bisnis"
    element={
      <Protection publicSide={true} userOnly={true}>
        <KelasBisnis />
      </Protection>
    }
  />,

  <Route
    key="careerLowongan"
    path="/career-lowongan"
    element={
      <Protection publicSide={true}>
        <CareerLowongan />
      </Protection>
    }
  />,

  <Route
    key="kelas-bisnis"
    path="/kelas-bisnis/:id"
    element={
      <Protection publicSide={true}>
        <DetailKelasBisnis />
      </Protection>
    }
  />,

  <Route
    key="konsultasi-bisnis"
    path="/konsultasi-bisnis"
    element={
      <Protection publicSide={true} userOnly={true}>
        <KonsultasiBisnis />
      </Protection>
    }
  />,
  <Route
    key="konsultasi-bisnis/deskripsi"
    path="/konsultasi-bisnis/deskripsi"
    element={
      <Protection publicSide={true} userOnly={true}>
        <KonsultasiBisnisDeskripsi />
      </Protection>
    }
  />,

  <Route
    key="layanan"
    path="/:title"
    element={
      <Protection publicSide={true}>
        <Layanan />
      </Protection>
    }
  >
    <Route path="layanan" element={<Layanan />} />
  </Route>,

  <Route
    key="profile"
    path="/profile/"
    element={
      <Protection userOnly={true}>
        <Profile />
      </Protection>
    }
  >
    <Route index element={<DashboardProfile />} />
    <Route path="dashboard/" element={<DashboardProfile />} />
    <Route path="kelas-saya/" element={<KelasSaya />}>
      <Route index element={<SemuaKelasSection />} />
      <Route path="semua-kelas" element={<SemuaKelasSection />} />
      <Route path="belum-dimulai" element={<BelumDimulaiSection />} />
      <Route path="sedang-dipelajari" element={<SedangDipelajariSection />} />
      <Route path="selesai" element={<SelesaiSection />} />
    </Route>
    <Route path="wishlist/" element={<Wishlist />} />
    <Route path="event/" element={<Event />} />
    <Route path="transaksi/" element={<Transaksi />}>
      <Route index element={<SemuaTransaksi />} />
      <Route path="semua-transaksi" element={<SemuaTransaksi />} />
      <Route path="transaksi-berhasil" element={<TransaksiBerhasil />} />
      <Route path="transaksi-menunggu" element={<TransaksiMenunggu />} />
      <Route path="transaksi-dibatalkan" element={<TransaksiDibatalkan />} />
    </Route>
  </Route>,
  <Route
    key="invoice"
    path="/profile/transaksi/:transaction_id/lihat-invoice"
    element={
      <Protection userOnly={true}>
        <Invoice />
      </Protection>
    }
  />,
  <Route
    key="about-us"
    path="/about-us"
    element={
      <Protection publicSide={true} userOnly={true}>
        <TentangKami />
      </Protection>
    }
  />,

  <Route
    key="login"
    path="/login"
    element={
      <Protection publicSide={true}>
        <Login />
      </Protection>
    }
  />,
  <Route
    key="profile"
    path="/profile"
    element={
      <Protection userOnly={true}>
        <UbahProfile />
      </Protection>
    }
  >
    <Route path=":username" element={<DetailProfile />} />,
    <Route path="password" element={<ChangePassword />} />,
    <Route path="info-lain" element={<InfoLain />} />,
  </Route>,

  <Route
    key="checkout"
    path="/checkout/:id_kelas_bisnis"
    element={
      <Protection userOnly={true}>
        <Checkout />
      </Protection>
    }
  />,

  <Route
    key="approval"
    path="/approval-checkout/:id_kelas_bisnis"
    element={
      <Protection userOnly={true}>
        <Approval />
      </Protection>
    }
  />,

  <Route
    key="success"
    path="/checkout/success-checkout"
    element={
      <Protection userOnly={true}>
        <Success />
      </Protection>
    }
  />,

  <Route
    key="free"
    path="/checkout-free/:id_kelas_bisnis"
    element={
      <Protection userOnly={true}>
        <FreeCheckout />
      </Protection>
    }
  />,

  <Route
    key="tentang-kelas"
    path="/tentang-kelas/:id"
    element={
      <Protection userOnly={true}>
        <TentangKelas />
      </Protection>
    }
  />,
  <Route
    key="lms-kelas"
    path="/lms"
    element={
      <Protection userOnly={true}>
        <LmsKelas />
      </Protection>
    }
  />,
  <Route
    key="verifikasi"
    path="/verifikasi/:verif"
    element={
      <Protection>
        <Verifikasi />
      </Protection>
    }
  />,
  <Route
    key="reset-password"
    path="/reset-password/:token"
    element={
      <Protection>
        <ResetPassword />
      </Protection>
    }
  />,
  <Route
    key="request-reset"
    path="/request-reset"
    element={
      <Protection publicSide={true}>
        <RequestReset />
      </Protection>
    }
  />,
  <Route key="admin" path="/admin">
    <Route
      key="admin-dashboard"
      path="dashboard"
      element={
        <Protect>
          <AdminDashboard />
        </Protect>
      }
    />
    <Route
      key="admin-dashboard-umkm"
      path="dashboard/umkm"
      element={
        <Protect>
          <DashboardUMKM />
        </Protect>
      }
    />
    <Route
      key="admin-dashboard-umkm-create"
      path="dashboard/umkm/create"
      element={
        <Protect>
          <UMKMForm />
        </Protect>
      }
    />
    <Route
      key="admin-dashboard-testimoni"
      path="dashboard/testimoni"
      element={
        <Protect>
          <DashboardTestimoni />
        </Protect>
      }
    />
    <Route
      key="admin-dashboard-testimoni-create"
      path="dashboard/testimoni/create"
      element={
        <Protect>
          <TestimoniForm />
        </Protect>
      }
    />
    <Route
      key="admin-dashboard-faq"
      path="dashboard/faq"
      element={
        <Protect>
          <DashboardFAQ />
        </Protect>
      }
    />
    <Route
      key="admin-dashboard-faq-create"
      path="dashboard/faq/create"
      element={
        <Protect>
          <FAQForm />
        </Protect>
      }
    />
    <Route
      key="admin-dashboard-partner"
      path="dashboard/partner"
      element={
        <Protect>
          <DashboardPartner />
        </Protect>
      }
    />
    <Route
      key="admin-dashboard-partner-create"
      path="dashboard/partner/create"
      element={
        <Protect>
          <PartnerForm />
        </Protect>
      }
    />
    <Route
      key="admin-kelas-bisnis"
      path="kelas-bisnis"
      element={
        <Protect>
          <AdminKelasBisnis />
        </Protect>
      }
    />
    <Route
      key="admin-kelas-bisnis-create"
      path="kelas-bisnis/create"
      element={
        <Protect>
          <KelasBisnisForm />
        </Protect>
      }
    />
    <Route
      key="admin-kelas-bisnis-edit"
      path="kelas-bisnis/edit/:id"
      element={
        <Protect>
          <KelasBisnisForm />
        </Protect>
      }
    />
    <Route
      key="admin-artikel"
      path="artikel"
      element={
        <Protect>
          <AdminArtikel />
        </Protect>
      }
    />
    <Route
      key="admin-artikel-create"
      path="artikel/create"
      element={
        <Protect>
          <ArtikelForm />
        </Protect>
      }
    />
    <Route
      key="admin-artikel-edit"
      path="artikel/edit/:id"
      element={
        <Protect>
          <ArtikelForm />
        </Protect>
      }
    />
    <Route
      key="admin-list-admin"
      path="list-admin"
      element={
        <Protect>
          <ListAdmin />
        </Protect>
      }
    />
    <Route
      key="admin-list-admin"
      path="list-admin/form-admin"
      element={
        <Protect>
          <FormAdmin />
        </Protect>
      }
    />
    <Route
      key="admin-list-admin"
      path="list-admin/form-edit-admin/:id"
      element={
        <Protect>
          <EditAdmin />
        </Protect>
      }
    />
  </Route>,

  <Route path="/restrict-page" element={<RestrictPage />} />,

  // <Route
  //   key="checkout"
  //   path="/checkout"
  //   element={
  //     <Protection userOnly={true}>
  //       <Checkout />
  //     </Protection>
  //   }
  // />,

  // <Route
  //   key="approval"
  //   path="/checkout/approval-checkout"
  //   element={
  //     <Protection userOnly={true}>
  //       <Approval />
  //     </Protection>
  //   }
  // />,

  // <Route
  //   key="success"
  //   path="/checkout/success-checkout"
  //   element={
  //     <Protection userOnly={true}>
  //       <Success />
  //     </Protection>
  //   }
  // />,
];

export default routes;
