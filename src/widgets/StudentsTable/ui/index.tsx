import { AgGridReact } from "@ag-grid-community/react";
import React, { useEffect, useMemo, useState } from "react";
import type { ColDef } from "@ag-grid-community/core";
import { useTranslation } from "react-i18next";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";

import { ModuleRegistry } from "@ag-grid-community/core";
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { MasterDetailModule } from "@ag-grid-enterprise/master-detail";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { RichSelectModule } from "@ag-grid-enterprise/rich-select";
import { SetFilterModule } from "@ag-grid-enterprise/set-filter";
import { StatusBarModule } from "@ag-grid-enterprise/status-bar";
import { FormOfEducationEnum, groupApi, studentApi } from "../../../entities";
import { Loader } from "shared";

ModuleRegistry.registerModules([
  ClientSideRowModelModule,
  ExcelExportModule,
  MasterDetailModule,
  RowGroupingModule,
  RichSelectModule,
  SetFilterModule,
  StatusBarModule,
]);

export const StudentsTable = () => {
  const { t, i18n } = useTranslation("tablesPage");
  const {
    data: studentsList,
    isLoading,
    isError,
  } = studentApi.useFetchAllStudentsQuery(null);

  const {
    data: groupData,
    isLoading: isGroupLoading,
    isError: isGroupError,
  } = groupApi.useFetchAllGroupsQuery(null);

  const data = studentsList?.map((student) => ({
    ...student,
    group: groupData?.find((group) => group.id === student.group)?.group_number,
    form_of_education: FormOfEducationEnum[student.form_of_education - 1],
  }));

  const [columnDefs, setColumnDefs] = useState<ColDef[]>([]);

  const localeText = useMemo(
    () => ({
      equals: t("agGrid.filter.equals"),
      notEqual: t("agGrid.filter.notEqual"),
      lessThan: t("agGrid.filter.lessThan"),
      greaterThan: t("agGrid.filter.greaterThan"),
      contains: t("agGrid.filter.contains"),
      notContains: t("agGrid.filter.doesNotContain"),
      startsWith: t("agGrid.filter.startsWith"),
      endsWith: t("agGrid.filter.endsWith"),
      applyFilter: t("agGrid.filter.applyFilter"),
      resetFilter: t("agGrid.filter.resetFilter"),
      clearFilter: t("agGrid.filter.clearFilter"),
      notBlank: t("agGrid.filter.notBlank"),
      blank: t("agGrid.filter.blank"),
    }),
    [t],
  );

  useEffect(() => {
    setColumnDefs([
      {
        field: "first_name",
        headerName: t("agGrid.columns.first_name"),
        flex: 1,
      },
      {
        field: "last_name",
        headerName: t("agGrid.columns.last_name"),
        filter: "agNumberColumnFilter",
        flex: 1,
      },
      {
        field: "middle_name",
        headerName: t("agGrid.columns.middle_name"),
        flex: 1,
      },
      {
        field: "year_of_entry",
        headerName: t("agGrid.columns.year_of_entry"),
        flex: 1,
      },
      {
        field: "year_of_ending",
        headerName: t("agGrid.columns.year_of_ending"),
        filter: "agNumberColumnFilter",
        flex: 1,
      },
      {
        field: "group",
        headerName: t("agGrid.columns.group"),
        flex: 1,
      },
      {
        field: "form_of_education",
        headerName: t("agGrid.columns.form_of_education"),
        flex: 1,
      },
    ]);
  }, [t, i18n.language]);

  const defaultColDef = useMemo(
    () => ({
      filter: "agTextColumnFilter",
      floatingFilter: true,
    }),
    [],
  );

  if (isLoading || isGroupLoading) {
    return <Loader />;
  }

  return (
    <>
      {isError || isGroupError ? (
        <div className={"flex items-center justify-center w-full h-full"}>
          <p
            className={
              "text-xl text-[#e54747] font-bold text-center w-full md:text-2xl xl:text-3xl"
            }
          >
            {t("An error occurred while executing the request.")}
          </p>
        </div>
      ) : (
        <div className={"ag-theme-quartz w-full h-[512px]"}>
          <AgGridReact
            rowData={data}
            columnDefs={columnDefs}
            defaultColDef={defaultColDef}
            localeText={localeText}
            pagination={true}
            paginationPageSize={10}
            paginationPageSizeSelector={[10, 25, 50]}
          />
        </div>
      )}
    </>
  );
};
