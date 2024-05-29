"use client";

import React, { useState, useEffect } from "react";
import ModalSavings from "./ModalSavings";
import ModalList from "./ModalList";
import ModalDelete from "./ModalDelete";
import Penghasilan from "./Penghasilan";
import Pengeluaran from "./Pengeluaran";
import DaftarList from "./DaftarList";
import TotalPengeluaran from "./TotalPengeluaran";

const Savings = () => {
  const [membukaModal, mengaturMembukaModal] = useState(false);
  const [modalKonten, mengaturModalKonten] = useState<boolean>(true);
  const [nilaiInput, mengaturNilaiInput] = useState("");
  const [penghasilan, mengaturPenghasilan] = useState("0");
  const [targetPengeluaran, mengaturTargetPengeluaran] = useState("0");

  const [membukaListModal, mengaturMembukaListModal] = useState(false);
  const [namaList, mengaturNamaList] = useState("");
  const [nilaiNominal, mengaturNilaiNominal] = useState("");
  const [isEditing, mengaturIsEditing] = useState(false);
  const [editIndex, mengaturEditIndex] = useState<number | null>(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);

  const [daftarPengeluaran, mengaturDaftarPengeluaran] = useState<
    { nama: string; nominal: string }[]
  >([]);

  const [errorMessage, mengaturErrorMessage] = useState(false);
  const [totalPengeluaran, setTotalPengeluaran] = useState(0);

  useEffect(() => {
    hitungTotalPengeluaran();
  }, [daftarPengeluaran]);

  const modalTerbuka = (isPenghasilan: boolean) => {
    mengaturModalKonten(isPenghasilan);
    mengaturNilaiInput("");
    mengaturErrorMessage(false);
    mengaturMembukaModal(true);
  };

  const btnTutupModal = () => {
    mengaturMembukaModal(false);
  };

  const mengubahNilaiInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = event.target.value.replace(/[^\d]/g, "");
    mengaturNilaiInput(formattedValue);
  };

  const btnSave = () => {
    if (nilaiInput.trim() === "") {
      mengaturErrorMessage(true);
      return;
    }

    if (modalKonten) {
      mengaturPenghasilan(nilaiInput);
    } else {
      mengaturTargetPengeluaran(nilaiInput);
    }
    btnTutupModal();
  };

  const btnBukaListModal = () => {
    mengaturNamaList("");
    mengaturNilaiNominal("");
    mengaturIsEditing(false);
    mengaturErrorMessage(false);
    mengaturMembukaListModal(true);
  };

  const btnModalList = (index: number) => {
    mengaturNamaList(daftarPengeluaran[index].nama);
    mengaturNilaiNominal(daftarPengeluaran[index].nominal);
    mengaturIsEditing(true);
    mengaturEditIndex(index);
    mengaturErrorMessage(false);
    mengaturMembukaListModal(true);
  };

  const btnModalDelete = (index: number) => {
    setDeleteIndex(index);
    setShowDeleteModal(true);
  };

  const hapusListItem = () => {
    if (deleteIndex !== null) {
      const newDaftar = [...daftarPengeluaran];
      newDaftar.splice(deleteIndex, 1);
      mengaturDaftarPengeluaran(newDaftar);
      setShowDeleteModal(false);
      setDeleteIndex(null);
    }
  };

  const btnSimpanList = () => {
    if (namaList.trim() === "" || nilaiNominal.trim() === "") {
      mengaturErrorMessage(true);
      return;
    }

    if (isEditing && editIndex !== null) {
      const newDaftar = [...daftarPengeluaran];
      newDaftar[editIndex] = { nama: namaList, nominal: nilaiNominal };
      mengaturDaftarPengeluaran(newDaftar);
    } else {
      mengaturDaftarPengeluaran([
        ...daftarPengeluaran,
        { nama: namaList, nominal: nilaiNominal },
      ]);
    }
    mengaturMembukaListModal(false);
  };

  const hitungTotalPengeluaran = () => {
    const total = daftarPengeluaran.reduce((sum, item) => {
      return sum + parseFloat(item.nominal.replace(/\./g, ""));
    }, 0);
    setTotalPengeluaran(total);
  };

  const isDaftarListDisabled = penghasilan === "0" || targetPengeluaran === "0";

  const formatRupiah = (angka: string) => {
    return angka.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="w-full flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="max-w-sm md:max-w-xl flex flex-col items-center justify-center gap-4">
          <Penghasilan
            penghasilan={formatRupiah(penghasilan)}
            modalTerbuka={() => modalTerbuka(true)}
          />

          <Pengeluaran
            targetPengeluaran={formatRupiah(targetPengeluaran)}
            modalTerbuka={() => modalTerbuka(false)}
            disabled={penghasilan === "0"}
          />

          <TotalPengeluaran
            totalPengeluaran={totalPengeluaran.toString()}
            formatRupiah={formatRupiah}
          />
        </div>

        <DaftarList
          daftarPengeluaran={daftarPengeluaran.map((item) => ({
            ...item,
            nominal: formatRupiah(item.nominal),
          }))}
          btnBukaListModal={btnBukaListModal}
          btnModalList={btnModalList}
          btnModalDelete={btnModalDelete}
          disabled={isDaftarListDisabled}
        />

        <ModalSavings
          membuka={membukaModal}
          konten={modalKonten}
          namaInput={nilaiInput}
          menutup={btnTutupModal}
          perubahan={mengubahNilaiInput}
          menyimpan={btnSave}
          errorMessage={errorMessage}
        />

        <ModalList
          membuka={membukaListModal}
          namaList={namaList}
          nilaiNominal={nilaiNominal}
          menutup={() => mengaturMembukaListModal(false)}
          perubahanNamaList={(event) => mengaturNamaList(event.target.value)}
          perubahanNilaiNominal={(event) =>
            mengaturNilaiNominal(event.target.value.replace(/\./g, ""))
          }
          menyimpan={btnSimpanList}
          errorMessage={errorMessage}
          isEditing={isEditing}
        />

        <ModalDelete
          membuka={showDeleteModal}
          menutup={() => setShowDeleteModal(false)}
          mengonfirmasi={hapusListItem}
        />
      </div>
    </div>
  );
};

export default Savings;
