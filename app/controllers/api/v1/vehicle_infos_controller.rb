class Api::V1::VehicleInfosController < ApplicationController
    def get_years
        sql = "select distinct year from vehicle_infos order by year asc;"
        records_array = ActiveRecord::Base.connection.execute(sql).values
        render :json => records_array
    end

    def get_makes
        year = params[:year]
        sql = "select distinct make from vehicle_infos where year="+year+" order by make asc;"
        records_array = ActiveRecord::Base.connection.execute(sql).values
        render :json => records_array
    end

    def get_models
        year = params[:year]
        make = params[:make].to_s
        sql = "select distinct model from vehicle_infos where year="+year+" and make='"+make+"' order by model asc;"
        records_array = ActiveRecord::Base.connection.execute(sql).values
        render :json => records_array
    end

    def get_body_styles
        year = params[:year]
        make = params[:make].to_s
        model = params[:model].to_s
        sql = "select distinct unnest(body_styles) from vehicle_infos where year="+year+" and make='"+make+"' and model='"+model+"'"
        records_array = ActiveRecord::Base.connection.execute(sql).values
        render :json => records_array
    end

  end
