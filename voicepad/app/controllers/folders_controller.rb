class FoldersController < ApplicationController
  def index
    @folders = Folder.all
    @notes = []
    @folders.each do |folder|
        @notes << folder.notes
    end
    
    render json: { message: "ok", folders_data: @folders, notes_data: @notes }
  end
  
  def show
    begin
      @folder = Folder.find(params[:id])
      render json: { message: "ok", folders_data: @folder }
    rescue ActiveRecord::RecordNotFound
      render json: { message: "no folder matches that ID" }, status: 404
    rescue Exception
      render json: { message: "there was some other error" }, status: 500
    end
  end
  

end
