class FoldersController < ApplicationController
  def index
                                                                                            
    @folders = Folder.all
    # @note = Note.new
    @notes = Note.order(:id)                                                                                                                                                                                                                                          
    # @notes = []                                                                                                                                                                 
    # @folders.each do |folder|
    #     @notes << folder.notes                                                                                                            
    #     end
    render json: { 
                    message: "ok",  
                    folders_data: @folders,                                                        
                    notes_data: @notes                                           
                }
    
  end
                                                                                                                                                                    
  def show                            
    begin
      @note = Note.new
      @notes = Folder.find(params[:id]).notes
      render json: { message: "ok", folders_data: @folder }
    rescue ActiveRecord::RecordNotFound
      render json: { message: "no folder matches that ID" }, status: 404
    rescue Exception
      render json: { message: "there was some other error" }, status: 500
    end
  end

  def new
      @folder = Folder.new
      render json: { 
                    message: "ok",  
                    folders_data: @folder, 
                    # notes_data: @notes 
                }
    end
    



    def create
        begin
        @folder = Folder.new(folder_params)
        @folder.save
        @all_folders = Folder.order(:id)
        render json: { 
                    message: "ok",  
                    folders_data: @all_folders, 
                    # notes_data: @notes 
                }

    rescue Exception
      render json: { message: "there was an error" }, status: 500
    end
  end

  def destroy
    begin
      @folder = Folder.find(params[:id])
      @folder.destroy
      @all_folders = Folder.order(:id)
      render json: { message: "ok", folders_data: @all_folders }
    rescue ActiveRecord::RecordNotFound
      render json: { message: "no folder matches that ID" }
    rescue Exception
      render json: { message: "there was some other error" }
    end
  end

private
    def set_folder
        @folder = Folder.find(params[:id])
    end
    
    def folder_params
        params.require(:folder).permit(:foldername)
    end
    

            
  

end
